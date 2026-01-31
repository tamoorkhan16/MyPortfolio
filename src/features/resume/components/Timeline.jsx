/**
 * Timeline Component
 * Animated timeline with SVG path drawing and vertical layout
 */

import { motion } from 'framer-motion';
import { useRef } from 'react';

import { useInView } from '@hooks/useInView';

import styles from './Timeline.module.css';

const Timeline = ({ items = [], variant = 'vertical' }) => {
  const containerRef = useRef(null);
  const isVisible = useInView(containerRef, { threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.4, type: 'spring', stiffness: 100 },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className={`${styles.timeline} ${styles[variant]}`}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      {/* SVG Line Background */}
      <svg className={styles.line} preserveAspectRatio="none">
        <motion.line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Timeline Items */}
      <div className={styles.items}>
        {items.map((item, index) => (
          <motion.div
            key={item.id || index}
            className={`${styles.item} ${index % 2 === 0 ? styles.left : styles.right}`}
            variants={itemVariants}
          >
            {/* Dot */}
            <motion.div className={styles.dot} variants={dotVariants}>
              <div className={styles.dotInner} />
            </motion.div>

            {/* Content */}
            <div className={styles.content}>
              {item.date && <span className={styles.date}>{item.date}</span>}
              {item.title && <h4 className={styles.title}>{item.title}</h4>}
              {item.subtitle && <p className={styles.subtitle}>{item.subtitle}</p>}
              {item.description && <p className={styles.description}>{item.description}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;
