/**
 * ExperienceSection Component
 * Displays work experience with expandable cards and achievement details
 */

import { motion } from 'framer-motion';

import ExpandableCard from '../components/ExpandableCard';
import Timeline from '../components/Timeline';

import styles from './ExperienceSection.module.css';

const ExperienceSection = ({ experiences = [] }) => {
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

  const timelineItems = experiences.map((exp) => ({
    id: exp.id,
    date: `${new Date(exp.startDate).getFullYear()} - ${
      exp.endDate ? new Date(exp.endDate).getFullYear() : 'Present'
    }`,
    title: exp.position,
    subtitle: exp.company,
    description: exp.location,
  }));

  return (
    <motion.section className={styles.section} variants={containerVariants} initial="hidden" animate="visible">
      <h2 className={styles.heading}>Work Experience</h2>

      {/* Timeline View */}
      <Timeline items={timelineItems} />

      {/* Detailed Cards */}
      <motion.div className={styles.cards} variants={containerVariants} initial="hidden" animate="visible">
        {experiences.map((exp, index) => (
          <motion.div key={exp.id} variants={itemVariants}>
            <ExpandableCard
              title={exp.position}
              subtitle={`${exp.company} • ${exp.location}`}
              defaultExpanded={index === 0}
              icon="💼"
            >
              <div className={styles.cardContent}>
                <p className={styles.description}>{exp.description}</p>

                <div className={styles.period}>
                  {new Date(exp.startDate).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric',
                  })}{' '}
                  -{' '}
                  {exp.endDate
                    ? new Date(exp.endDate).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric',
                      })
                    : 'Present'}
                </div>

                {exp.achievements && exp.achievements.length > 0 && (
                  <div className={styles.achievements}>
                    <h4 className={styles.subheading}>Key Achievements</h4>
                    <ul className={styles.list}>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className={styles.technologies}>
                    <h4 className={styles.subheading}>Technologies</h4>
                    <div className={styles.tags}>
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className={styles.tag}>
                          {tech}
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

export default ExperienceSection;
