import { motion, AnimatePresence } from 'framer-motion';
import { useCallback } from 'react';

import { fadeInUp, tween } from '@utils/animations';

import styles from './SkillFilter.module.css';

/**
 * SkillFilter Component
 * Animated category filter with smooth transitions
 */
const SkillFilter = ({ categories, activeCategory, onCategoryChange, skillCounts = {} }) => {
  const handleKeyDown = useCallback(
    (e, category) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onCategoryChange(category);
      }
    },
    [onCategoryChange]
  );

  return (
    <motion.div
      className={styles.filterBar}
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      transition={tween.smooth}
    >
      <div className={styles.filterContainer}>
        <AnimatePresence>
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const label = category.charAt(0).toUpperCase() + category.slice(1);
            const count = skillCounts[category] || 0;

            return (
              <div key={category} className={styles.buttonWrapper}>
                <motion.button
                  className={`${styles.filterButton} ${isActive ? styles.active : ''}`}
                  onClick={() => onCategoryChange(category)}
                  onKeyDown={(e) => handleKeyDown(e, category)}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  transition={tween.smooth_fast}
                  aria-pressed={isActive}
                  aria-label={`Filter by ${label}${count ? ` (${count} skills)` : ''}`}
                >
                  <span className={styles.label}>{label}</span>
                  {count > 0 && <span className={styles.count}>{count}</span>}
                </motion.button>

                {/* Active Indicator */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className={styles.activeIndicator}
                      layoutId="filterIndicator"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={tween.smooth}
                    />
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default SkillFilter;
