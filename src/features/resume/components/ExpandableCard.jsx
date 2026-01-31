/**
 * ExpandableCard Component
 * Reusable collapsible card with smooth animations
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import styles from './ExpandableCard.module.css';

const ExpandableCard = ({ title, subtitle, children, defaultExpanded = false, icon = '📌' }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const containerVariants = {
    collapsed: { opacity: 1 },
    expanded: { opacity: 1 },
  };

  const contentVariants = {
    collapsed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    expanded: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const iconVariants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
  };

  return (
    <motion.div
      className={styles.card}
      variants={containerVariants}
      initial="collapsed"
      animate={isExpanded ? 'expanded' : 'collapsed'}
    >
      <motion.button
        className={styles.header}
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
        whileTap={{ scale: 0.98 }}
      >
        <div className={styles.headerContent}>
          <span className={styles.icon}>{icon}</span>
          <div className={styles.titles}>
            <h3 className={styles.title}>{title}</h3>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        </div>
        <motion.div className={styles.chevron} variants={iconVariants} animate={isExpanded ? 'expanded' : 'collapsed'}>
          ⌄
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div className={styles.contentWrapper} variants={contentVariants} initial="collapsed" animate="expanded" exit="collapsed">
            <div className={styles.content}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ExpandableCard;
