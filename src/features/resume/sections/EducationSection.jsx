/**
 * EducationSection Component
 * Displays educational background with expandable details
 */

import { motion } from 'framer-motion';

import ExpandableCard from '../components/ExpandableCard';

import styles from './EducationSection.module.css';

const EducationSection = ({ education = [] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section className={styles.section} variants={containerVariants} initial="hidden" animate="visible">
      <h2 className={styles.heading}>Education</h2>

      <motion.div className={styles.cards} variants={containerVariants} initial="hidden" animate="visible">
        {education.map((edu, index) => (
          <motion.div key={edu.id} variants={itemVariants}>
            <ExpandableCard
              title={edu.degree}
              subtitle={`${edu.institution} • ${edu.field}`}
              defaultExpanded={index === 0}
              icon="🎓"
            >
              <div className={styles.cardContent}>
                <div className={styles.metadata}>
                  <span className={styles.metaItem}>
                    <strong>Duration:</strong>{' '}
                    {new Date(edu.startDate).getFullYear()} -{' '}
                    {new Date(edu.endDate).getFullYear()}
                  </span>
                  <span className={styles.metaItem}>
                    <strong>GPA:</strong> {edu.gpa}
                  </span>
                </div>

                {edu.honors && edu.honors.length > 0 && (
                  <div className={styles.honors}>
                    <h4 className={styles.subheading}>Honors & Recognition</h4>
                    <ul className={styles.list}>
                      {edu.honors.map((honor, idx) => (
                        <li key={idx}>{honor}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {edu.coursework && edu.coursework.length > 0 && (
                  <div className={styles.coursework}>
                    <h4 className={styles.subheading}>Relevant Coursework</h4>
                    <div className={styles.courses}>
                      {edu.coursework.map((course, idx) => (
                        <span key={idx} className={styles.course}>
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ExpandableCard>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default EducationSection;
