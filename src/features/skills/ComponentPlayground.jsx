import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { tween } from '@utils/animations';

import styles from './ComponentPlayground.module.css';
import FramerMotionDemo from './demos/FramerMotionDemo';
import ReactDemo from './demos/ReactDemo';
import ReduxDemo from './demos/ReduxDemo';

/**
 * ComponentPlayground Component
 * Interactive demo tabs for various technologies
 */
const ComponentPlayground = () => {
  const [activeTab, setActiveTab] = useState('react');

  const tabs = [
    { id: 'react', name: 'React Hooks', component: ReactDemo },
    { id: 'framer', name: 'Framer Motion', component: FramerMotionDemo },
    { id: 'redux', name: 'Redux', component: ReduxDemo },
  ];

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <motion.div
      className={styles.playground}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={tween.smooth}
    >
      {/* Header */}
      <div className={styles.header}>
        <h3 className={styles.title}>Interactive Tech Demos</h3>
        <p className={styles.subtitle}>
          Explore how I use different technologies in real-world scenarios
        </p>
      </div>

      {/* Tab Buttons */}
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            transition={tween.smooth}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            {tab.name}
          </motion.button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        className={styles.tabContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={tween.smooth}
      >
        <AnimatePresence mode="wait">
          {ActiveComponent && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={tween.smooth}
            >
              <ActiveComponent />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ComponentPlayground;
