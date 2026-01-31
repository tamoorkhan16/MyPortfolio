/**
 * DownloadSuccess Notification Component
 * Portal-based toast notification that auto-dismisses
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './DownloadSuccess.module.css';

const DownloadSuccess = ({ isVisible = false, onClose, filename = 'resume.pdf', duration = 3000 }) => {
  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [isVisible, onClose, duration]);

  const notificationVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  };

  const content = (
    <div className={styles.container}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={styles.notification}
            variants={notificationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className={styles.icon}>✓</div>
            <div className={styles.content}>
              <p className={styles.title}>Download Complete</p>
              <p className={styles.message}>{filename} has been saved</p>
            </div>
            <button className={styles.closeButton} onClick={onClose} aria-label="Close notification">
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return ReactDOM.createPortal(content, document.body);
};

export default DownloadSuccess;
