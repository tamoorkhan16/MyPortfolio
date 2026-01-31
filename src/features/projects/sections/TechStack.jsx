import { motion } from 'framer-motion';
import { useInView } from '@hooks/useInView';
import { fadeInUp, staggerChildren } from '@utils/animations';
import { tween } from '@utils/animations';

import styles from '../ProjectDetail.module.css';

/**
 * TechStack Component
 */
const TechStack = ({ project }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      className={styles.section}
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      variants={staggerChildren}
    >
      <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
        Tech Stack
      </motion.h2>

      <motion.div
        className={styles.techGrid}
        variants={staggerChildren}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
      >
        {project.tags.map((tech) => (
          <motion.div
            key={tech}
            className={styles.techCard}
            variants={fadeInUp}
            whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)' }}
            transition={tween.smooth}
          >
            <div className={styles.techIcon}>
              <span>{tech.charAt(0)}</span>
            </div>
            <h3 className={styles.techName}>{tech}</h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TechStack;
