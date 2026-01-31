import { motion } from 'framer-motion';
import { useInView } from '@hooks/useInView';
import { fadeInUp, staggerChildren } from '@utils/animations';
import { tween } from '@utils/animations';

import styles from '../ProjectDetail.module.css';

/**
 * ProjectLinks Component
 */
const ProjectLinks = ({ project }) => {
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
        Links & Resources
      </motion.h2>

      <motion.div
        className={styles.linksGrid}
        variants={staggerChildren}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
      >
        {project.liveUrl && (
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={tween.smooth}
          >
            <span className={styles.linkIcon}>🌐</span>
            <span>View Live Demo</span>
            <span className={styles.externalIcon}>↗</span>
          </motion.a>
        )}

        {project.githubUrl && (
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={tween.smooth}
          >
            <span className={styles.linkIcon}>💻</span>
            <span>View on GitHub</span>
            <span className={styles.externalIcon}>↗</span>
          </motion.a>
        )}
      </motion.div>
    </motion.section>
  );
};

export default ProjectLinks;
