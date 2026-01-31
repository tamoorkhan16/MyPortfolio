import { motion } from 'framer-motion';
import { useInView } from '@hooks/useInView';
import { fadeInUp, staggerChildren } from '@utils/animations';
import { tween } from '@utils/animations';

import styles from '../ProjectDetail.module.css';

/**
 * ProjectChallenges Component
 */
const ProjectChallenges = ({ project }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  if (!project.challenges || project.challenges.length === 0) {
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
        Challenges
      </motion.h2>

      <motion.div
        className={styles.challengesGrid}
        variants={staggerChildren}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
      >
        {project.challenges.map((challenge, index) => (
          <motion.div
            key={`${challenge.title}-${index}`}
            className={styles.challengeCard}
            variants={fadeInUp}
            whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)' }}
            transition={tween.smooth}
          >
            <div className={styles.challengeNumber}>{index + 1}</div>
            <h3 className={styles.challengeTitle}>{challenge.title}</h3>
            <p className={styles.challengeDescription}>{challenge.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ProjectChallenges;
