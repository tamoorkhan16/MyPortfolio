/**
 * AchievementsSection Component
 * Displays achievements, awards, publications, and speaking engagements
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import styles from './AchievementsSection.module.css';

const AchievementsSection = ({ achievements = [] }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All', count: achievements.length },
    { id: 'awards', label: 'Awards', count: achievements.filter((a) => a.category === 'awards').length },
    { id: 'publications', label: 'Publications', count: achievements.filter((a) => a.category === 'publications').length },
    { id: 'speaking', label: 'Speaking', count: achievements.filter((a) => a.category === 'speaking').length },
    { id: 'open-source', label: 'Open Source', count: achievements.filter((a) => a.category === 'open-source').length },
  ];

  const filteredAchievements = activeCategory === 'all' ? achievements : achievements.filter((a) => a.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  const getCategoryColor = (category) => {
    const colors = {
      awards: 'rgb(251, 146, 60)',
      publications: 'rgb(59, 130, 246)',
      speaking: 'rgb(139, 92, 246)',
      'open-source': 'rgb(34, 197, 94)',
    };
    return colors[category] || 'rgb(139, 92, 246)';
  };

  const getCategoryEmoji = (category) => {
    const emojis = {
      awards: '🏆',
      publications: '📄',
      speaking: '🎤',
      'open-source': '🔓',
    };
    return emojis[category] || '⭐';
  };

  return (
    <motion.section className={styles.section} variants={containerVariants} initial="hidden" animate="visible">
      <h2 className={styles.heading}>Achievements</h2>

      {/* Category Filter */}
      <motion.div className={styles.filter}>
        {categories.map((cat) => (
          <motion.button
            key={cat.id}
            className={`${styles.filterButton} ${activeCategory === cat.id ? styles.active : ''}`}
            onClick={() => setActiveCategory(cat.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat.label}
            <span className={styles.count}>{cat.count}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Achievements Grid */}
      <motion.div className={styles.grid} variants={containerVariants} initial="hidden" animate="visible">
        <AnimatePresence>
          {filteredAchievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              className={styles.card}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
            >
              <div className={styles.categoryBadge} style={{ backgroundColor: `${getCategoryColor(achievement.category)}20`, borderColor: getCategoryColor(achievement.category) }}>
                <span className={styles.emoji}>{getCategoryEmoji(achievement.category)}</span>
                <span className={styles.categoryLabel}>{achievement.category}</span>
              </div>

              <h3 className={styles.title}>{achievement.title}</h3>

              <p className={styles.description}>{achievement.description}</p>

              <p className={styles.date}>
                {new Date(achievement.date).toLocaleDateString('en-US', {
                  month: 'short',
                  year: 'numeric',
                })}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredAchievements.length === 0 && (
        <motion.div className={styles.empty} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p>No achievements found in this category</p>
        </motion.div>
      )}
    </motion.section>
  );
};

export default AchievementsSection;
