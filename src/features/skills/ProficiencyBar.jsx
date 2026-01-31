import { motion } from 'framer-motion';

import { useInView } from '@hooks/useInView';
import { easeOutExpo } from '@utils/easings';

import styles from './ProficiencyBar.module.css';

/**
 * ProficiencyBar Component
 * Animated progress bar showing skill proficiency level
 */
const ProficiencyBar = ({ proficiency, yearsOfExperience, name }) => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  // Determine proficiency level text and color
  const getLevel = (prof) => {
    if (prof >= 90) return 'Expert';
    if (prof >= 70) return 'Intermediate';
    return 'Beginner';
  };

  // Determine color class based on proficiency
  const getColorClass = (prof) => {
    if (prof >= 90) return styles.expert;
    if (prof >= 70) return styles.intermediate;
    return styles.beginner;
  };

  return (
    <div className={styles.proficiencyContainer} ref={ref}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h4 className={styles.skillName}>{name}</h4>
          <span className={`${styles.level} ${getColorClass(proficiency)}`}>
            {getLevel(proficiency)}
          </span>
        </div>
        <motion.span
          className={styles.percentage}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          {proficiency}%
        </motion.span>
      </div>

      {/* Progress Bar */}
      <div className={styles.barContainer}>
        <motion.div
          className={`${styles.bar} ${getColorClass(proficiency)}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${proficiency}%` } : { width: 0 }}
          transition={{
            duration: 0.8,
            ease: easeOutExpo,
          }}
        />
      </div>

      {/* Metadata */}
      {yearsOfExperience && (
        <motion.p
          className={styles.experience}
          initial={{ opacity: 0, y: 5 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          {yearsOfExperience} {yearsOfExperience === 1 ? 'year' : 'years'} of experience
        </motion.p>
      )}
    </div>
  );
};

export default ProficiencyBar;
