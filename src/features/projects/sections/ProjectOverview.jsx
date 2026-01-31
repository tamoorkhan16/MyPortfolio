import { motion } from 'framer-motion';

import { useInView } from '@hooks/useInView';

import { fadeInUp, staggerChildren } from '@utils/animations';

import styles from '../ProjectDetail.module.css';

/**
 * ProjectOverview Component
 */
const ProjectOverview = ({ project }) => {
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
        Overview
      </motion.h2>

      <motion.div className={styles.overviewGrid} variants={fadeInUp}>
        {/* Category Badge */}
        <div className={styles.overviewItem}>
          <h3 className={styles.overviewLabel}>Category</h3>
          <span className={`${styles.badge} ${styles[`badge-${project.category}`]}`}>
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
        </div>

        {/* Featured Status */}
        {project.featured && (
          <div className={styles.overviewItem}>
            <h3 className={styles.overviewLabel}>Status</h3>
            <span className={styles.featuredBadge}>Featured Project</span>
          </div>
        )}

        {/* Description */}
        <div className={`${styles.overviewItem} ${styles.fullWidth}`}>
          <h3 className={styles.overviewLabel}>Description</h3>
          <p className={styles.longDescription}>{project.longDescription}</p>
        </div>

        {/* Tags */}
        <div className={`${styles.overviewItem} ${styles.fullWidth}`}>
          <h3 className={styles.overviewLabel}>Technologies</h3>
          <div className={styles.tagList}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectOverview;
