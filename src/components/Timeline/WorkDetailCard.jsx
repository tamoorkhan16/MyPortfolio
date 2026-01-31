// WorkDetailCard.jsx
// See plan for full implementation details.

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Portal from '../Portal/Portal.jsx';
import { fadeIn, staggerChildren } from '../../utils/animations';
import { TAP_SCALE_FACTOR } from '../../utils/animationConstants';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';
import useFocusTrap from '../../hooks/useFocusTrap';
import styles from './WorkDetailCard.module.css';

function WorkDetailCard({ experience, isOpen, onClose, position }) {
  const cardRef = useRef(null);
  useBodyScrollLock(isOpen);
  useFocusTrap(cardRef, isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Portal>
      <AnimatePresence mode="wait">
        <motion.div
          className={styles.backdrop}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        />
        <motion.div
          className={styles.card}
          ref={cardRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="work-detail-title"
          aria-describedby="work-detail-desc"
          style={position && position.x && position.y
            ? { top: position.y, left: position.x, transform: 'none' }
            : { top: 120, left: '50%', transform: 'translateX(-50%)' }
          }
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 40 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className={styles.header}>
            <div>
              <div className={styles.company} id="work-detail-title">{experience.company}</div>
              <div className={styles.position}>{experience.position}</div>
              <div className={styles.meta}>
                <span>{experience.dateRange}</span>
                {experience.location && <span>{experience.location}</span>}
              </div>
            </div>
            <button
              className={styles.closeButton}
              onClick={onClose}
              tabIndex={0}
              aria-label="Close details"
              style={{ transform: `scale(${TAP_SCALE_FACTOR})` }}
            >
              ×
            </button>
          </div>
          <div className={styles.content} id="work-detail-desc">
            <ul className={styles.achievements}>
              {experience.achievements?.map((ach, i) => (
                <motion.li
                  className={styles.achievement}
                  key={i}
                  variants={staggerChildren}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ delay: i * 0.08 }}
                >
                  {ach}
                </motion.li>
              ))}
            </ul>
            <div className={styles.technologies}>
              {experience.technologies?.map((tech, i) => (
                <span className={styles.tech} key={i}>{tech}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Portal>
  );
}

export default WorkDetailCard;
