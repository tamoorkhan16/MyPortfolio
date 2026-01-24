/**
 * Scroll Indicator Component
 *
 * Animated indicator at bottom of Hero section prompting user to scroll.
 * Features infinite bounce animation and hides after scrolling.
 */

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { easeInOutSine } from '@utils/easings';
import styles from './ScrollIndicator.module.css';

export const ScrollIndicator = () => {
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide indicator after scrolling past 100px
      if (window.scrollY > 100) {
        setShouldShow(false);
      } else {
        setShouldShow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const nextSection = document.querySelector('#projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 1 }}
      animate={{ opacity: shouldShow ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      pointerEvents={shouldShow ? 'auto' : 'none'}
    >
      <motion.button
        className={styles.button}
        onClick={handleClick}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: easeInOutSine,
        }}
        aria-label="Scroll to next section"
      >
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.button>

      <motion.p
        className={styles.text}
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        Scroll Down
      </motion.p>
    </motion.div>
  );
};

export default ScrollIndicator;
