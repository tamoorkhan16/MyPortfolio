import { motion } from 'framer-motion';
import { useCallback, useMemo } from 'react';

import { fadeInDown, tween } from '@utils/animations';

import styles from './CategoryFilter.module.css';

/**
 * CategoryFilter Component
 * Animated filter controls with active indicator
 */
const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
  projectCounts = {},
}) => {
  // Memoize category list to prevent unnecessary renders
  const categoryList = useMemo(() => categories || [], [categories]);

  const handleCategoryClick = useCallback(
    (category) => {
      onCategoryChange(category);
    },
    [onCategoryChange]
  );

  const handleKeyDown = useCallback(
    (e, category) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCategoryClick(category);
      }
    },
    [handleCategoryClick]
  );

  return (
    <motion.div
      className={styles.filterBar}
      variants={fadeInDown}
      initial="initial"
      animate="animate"
      transition={tween.smooth}
    >
      <div className={styles.filterContainer}>
        {categoryList.map((category) => {
          const isActive = activeCategory === category;
          const count = projectCounts[category] || 0;
          const label = category.charAt(0).toUpperCase() + category.slice(1);

          return (
            <div key={category} className={styles.buttonWrapper}>
              <motion.button
                className={`${styles.filterButton} ${isActive ? styles.active : ''}`}
                onClick={() => handleCategoryClick(category)}
                onKeyDown={(e) => handleKeyDown(e, category)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={tween.smooth_fast}
                aria-pressed={isActive}
                aria-label={`Filter by ${label}${count ? ` (${count} projects)` : ''}`}
              >
                <span className={styles.label}>{label}</span>
                {count > 0 && <span className={styles.count}>{count}</span>}
              </motion.button>

              {/* Active Indicator */}
              {isActive && (
                <motion.div
                  className={styles.activeIndicator}
                  layoutId="categoryIndicator"
                  transition={tween.smooth}
                />
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CategoryFilter;
