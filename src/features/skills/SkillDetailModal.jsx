import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { getProjectSkills, getRelatedSkills } from '@data/skills';

import styles from './SkillDetailModal.module.css';

/**
 * SkillDetailModal Component
 * Modal showing comprehensive skill details
 */
const SkillDetailModal = ({ skill, isOpen, onClose }) => {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  // Focus trap and keyboard handling
  useEffect(() => {
    if (!isOpen) return;

    previousActiveElement.current = document.activeElement;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }

      // Tab trap
      if (e.key === 'Tab') {
        const focusableElements = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousActiveElement.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!skill) return null;

  const relatedSkills = getRelatedSkills(skill.id);
  const projects = getProjectSkills(skill.id);

  const getProficiencyLabel = (proficiency) => {
    if (proficiency >= 90) return 'Expert';
    if (proficiency >= 70) return 'Intermediate';
    return 'Beginner';
  };

  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 90) return 'expert';
    if (proficiency >= 70) return 'intermediate';
    return 'beginner';
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <div className={styles.modalContainer} role="dialog" aria-modal="true" ref={modalRef}>
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Header */}
              <div className={styles.header}>
                <div className={styles.titleSection}>
                  <div className={styles.icon}>{skill.icon}</div>
                  <div>
                    <h2 className={styles.title}>{skill.name}</h2>
                    <p className={styles.category}>{skill.category}</p>
                  </div>
                </div>
                <button
                  className={styles.closeButton}
                  onClick={onClose}
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className={styles.content}>
                {/* Description */}
                <section className={styles.section}>
                  <h3 className={styles.sectionTitle}>About</h3>
                  <p className={styles.description}>{skill.description}</p>
                </section>

                {/* Proficiency */}
                <section className={styles.section}>
                  <h3 className={styles.sectionTitle}>Proficiency</h3>
                  <div className={styles.proficiencyBlock}>
                    <div className={styles.proficiencyStats}>
                      <div>
                        <p className={styles.statLabel}>Level</p>
                        <p className={`${styles.statValue} ${styles[getProficiencyColor(skill.proficiency)]}`}>
                          {getProficiencyLabel(skill.proficiency)}
                        </p>
                      </div>
                      <div>
                        <p className={styles.statLabel}>Score</p>
                        <p className={styles.statValue}>{skill.proficiency}%</p>
                      </div>
                      <div>
                        <p className={styles.statLabel}>Experience</p>
                        <p className={styles.statValue}>{skill.yearsOfExperience} year{skill.yearsOfExperience !== 1 ? 's' : ''}</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className={styles.progressContainer}>
                      <div className={styles.progressBackground}>
                        <motion.div
                          className={`${styles.progressBar} ${styles[getProficiencyColor(skill.proficiency)]}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Related Skills */}
                {relatedSkills.length > 0 && (
                  <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Related Skills</h3>
                    <div className={styles.skillsList}>
                      {relatedSkills.map((relatedSkill, index) => (
                        <motion.div
                          key={relatedSkill.id}
                          className={styles.skillTag}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <span>{relatedSkill.icon}</span>
                          <span>{relatedSkill.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Projects */}
                {projects.length > 0 && (
                  <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Used In Projects</h3>
                    <ul className={styles.projectsList}>
                      {projects.map((project, index) => (
                        <motion.li
                          key={project.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <a href={`#project-${project.id}`} className={styles.projectLink}>
                            {project.title}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Demo Button */}
                {skill.hasDemo && (
                  <section className={styles.section}>
                    <button className={styles.demoButton}>
                      <span>🎯</span>
                      View Interactive Demo
                    </button>
                  </section>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default SkillDetailModal;
