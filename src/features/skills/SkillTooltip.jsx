import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

import Portal from '@components/Portal/Portal';
import { fadeInScale, tween } from '@utils/animations';

import styles from './SkillTooltip.module.css';

/**
 * SkillTooltip Component
 * Positioned tooltip showing skill details with smart placement
 */
const SkillTooltip = ({ skill, isVisible, x, y }) => {
  const tooltipRef = useRef(null);
  const [tooltipPos, setTooltipPos] = useState({ top: y, left: x });
  const [placement, setPlacement] = useState('top');

  useEffect(() => {
    if (!isVisible || !tooltipRef.current) return;

    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    let top = y - tooltipRect.height - 10;
    let left = x - tooltipRect.width / 2;
    let newPlacement = 'top';

    // Adjust if tooltip overflows viewport
    if (top < 10) {
      top = y + 10;
      newPlacement = 'bottom';
    }

    if (left < 10) {
      left = 10;
      newPlacement = 'right';
    }

    if (left + tooltipRect.width > window.innerWidth - 10) {
      left = window.innerWidth - tooltipRect.width - 10;
      newPlacement = 'left';
    }

    setTooltipPos({ top, left });
    setPlacement(newPlacement);
  }, [isVisible, x, y]);

  return (
    <Portal>
      <AnimatePresence>
        {isVisible && skill && (
          <motion.div
            ref={tooltipRef}
            className={`${styles.tooltip} ${styles[placement]}`}
            style={{
              top: tooltipPos.top,
              left: tooltipPos.left,
            }}
            variants={fadeInScale}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={tween.smooth}
          >
            {/* Arrow */}
            <div className={styles.arrow} />

            {/* Content */}
            <div className={styles.content}>
              <div className={styles.header}>
                <span className={styles.icon}>{skill.icon}</span>
                <h4 className={styles.skillName}>{skill.name}</h4>
              </div>

              <p className={styles.description}>{skill.description}</p>

              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <span className={styles.label}>Proficiency</span>
                  <span className={styles.value}>{skill.proficiency}%</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.label}>Experience</span>
                  <span className={styles.value}>{skill.yearsOfExperience}y</span>
                </div>
              </div>

              {skill.relatedSkills && skill.relatedSkills.length > 0 && (
                <div className={styles.related}>
                  <span className={styles.relatedLabel}>Related:</span>
                  <div className={styles.relatedTags}>
                    {skill.relatedSkills.map((relatedId) => (
                      <span key={relatedId} className={styles.tag}>
                        {relatedId}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default SkillTooltip;
