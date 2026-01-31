import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '@utils/animations';
import { tween } from '@utils/animations';
import styles from './ScrollProgressBar.module.css';
import { useScrollProgress } from '@hooks/useScrollProgress';

/**
 * ScrollProgressBar Component
 * Fixed progress indicator showing scroll position
 */
const ScrollProgressBar = () => {
  const scrollProgress = useScrollProgress();

  return (
    <motion.div
      className={styles.progressBar}
      style={{
        scaleX: scrollProgress,
        transformOrigin: '0%',
      }}
      transition={tween.smooth}
    />
  );
};

export default ScrollProgressBar;
