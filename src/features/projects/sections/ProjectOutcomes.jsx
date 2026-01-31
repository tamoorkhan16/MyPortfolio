import { motion } from 'framer-motion';
import { useInView } from '@hooks/useInView';
import { fadeInUp, staggerChildren } from '@utils/animations';
import { tween } from '@utils/animations';

import styles from '../ProjectDetail.module.css';

/**
 * ProjectOutcomes Component
 */
const ProjectOutcomes = ({ project }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  if (!project.outcomes || project.outcomes.length === 0) {
    return null;
  }

  return (
    <motion.section
      ref={ref}
      className={styles.section}
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      variants={staggerChildren}
    >
      <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
        Outcomes & Results
      </motion.h2>

      <motion.div
        className={styles.outcomesList}
        variants={staggerChildren}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
      >
        {project.outcomes.map((outcome, index) => (
          <motion.li
            key={`${outcome}-${index}`}
            className={styles.outcomeItem}
            variants={fadeInUp}
            transition={tween.smooth}
          >
            <span className={styles.outcomeIcon}>✓</span>
            <span>{outcome}</span>
          </motion.li>
        ))}
      </motion.div>

      {/* Metrics */}
      {project.metrics && (
        <motion.div
          className={styles.metricsGrid}
          variants={staggerChildren}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
        >
          {Object.entries(project.metrics).map(([key, value]) => (
            <motion.div
              key={key}
              className={styles.metricCard}
              variants={fadeInUp}
            >
              <div className={styles.metricValue}>{value}</div>
              <div className={styles.metricLabel}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.section>
  );
};

export default ProjectOutcomes;
