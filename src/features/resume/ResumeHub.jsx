/**
 * ResumeHub Component
 * Main resume section with PDF export, live preview, and all sections
 */

import { motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { RESUME_DATA } from '@data/resumeData';
import { generatePDF } from '@utils/pdfGenerator';

import DownloadSuccess from './components/DownloadSuccess';
import styles from './ResumeHub.module.css';
import AchievementsSection from './sections/AchievementsSection';
import CertificationsSection from './sections/CertificationsSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';

const ResumeHub = () => {
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showDownloadSuccess, setShowDownloadSuccess] = useState(false);
  const resumeRef = useRef(null);

  // Memoize data to prevent unnecessary re-renders
  const memoizedData = useMemo(() => ({
    personal: RESUME_DATA.personal,
    experience: RESUME_DATA.experience,
    education: RESUME_DATA.education,
    certifications: RESUME_DATA.certifications,
    achievements: RESUME_DATA.achievements,
  }), []);

  // Handle PDF download
  const handleDownloadPDF = useCallback(async () => {
    if (isDownloading) return;

    setIsDownloading(true);
    const result = await generatePDF('resume-content', `${memoizedData.personal.name.replace(/\s+/g, '_')}_Resume.pdf`);

    if (result.success) {
      setShowDownloadSuccess(true);
    }

    setIsDownloading(false);
  }, [isDownloading, memoizedData.personal.name]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Ctrl+P or Cmd+P for download
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        handleDownloadPDF();
      }

      // Ctrl+Shift+P for preview toggle
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsPreviewMode(!isPreviewMode);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleDownloadPDF, isPreviewMode]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div className={`${styles.container} ${isPreviewMode ? styles.previewMode : ''}`} variants={containerVariants} initial="hidden" animate="visible">
      {/* Header Section */}
      <motion.header className={`${styles.header} ${isPreviewMode ? styles.previewMode : ''}`} variants={itemVariants}>
        <div className={styles.personalInfo}>
          <h1 className={styles.name}>{memoizedData.personal.name}</h1>
          <p className={styles.title}>{memoizedData.personal.title}</p>
          <p className={styles.summary}>{memoizedData.personal.summary}</p>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            {memoizedData.personal.email && (
              <a href={`mailto:${memoizedData.personal.email}`} className={styles.contactLink}>
                📧 {memoizedData.personal.email}
              </a>
            )}
            {memoizedData.personal.phone && (
              <a href={`tel:${memoizedData.personal.phone}`} className={styles.contactLink}>
                📱 {memoizedData.personal.phone}
              </a>
            )}
            {memoizedData.personal.location && (
              <span className={styles.contactLink}>📍 {memoizedData.personal.location}</span>
            )}
          </div>

          {/* Social Links */}
          <div className={styles.socialLinks}>
            {memoizedData.personal.linkedin && (
              <a href={memoizedData.personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                LinkedIn
              </a>
            )}
            {memoizedData.personal.github && (
              <a href={memoizedData.personal.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                GitHub
              </a>
            )}
            {memoizedData.personal.website && (
              <a href={memoizedData.personal.website} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Portfolio
              </a>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className={`${styles.actions} ${isPreviewMode ? styles.previewMode : ''}`}>
          <motion.button
            className={`${styles.button} ${styles.downloadButton}`}
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Download PDF (Ctrl+P)"
          >
            {isDownloading ? '⏳ Generating...' : '📥 Download PDF'}
          </motion.button>

          <motion.button
            className={`${styles.button} ${isPreviewMode ? styles.previewActive : ''}`}
            onClick={() => setIsPreviewMode(!isPreviewMode)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Preview Mode (Ctrl+Shift+P)"
          >
            {isPreviewMode ? '👁️ Preview On' : '👁️ Preview Off'}
          </motion.button>
        </div>
      </motion.header>

      {/* Resume Content */}
      <motion.div
        id="resume-content"
        className={`${styles.content} ${isPreviewMode ? styles.printMode : ''}`}
        ref={resumeRef}
        variants={itemVariants}
      >
        {/* Experience Section */}
        {memoizedData.experience && memoizedData.experience.length > 0 && (
          <ExperienceSection experiences={memoizedData.experience} />
        )}

        {/* Education Section */}
        {memoizedData.education && memoizedData.education.length > 0 && (
          <EducationSection education={memoizedData.education} />
        )}

        {/* Certifications Section */}
        {memoizedData.certifications && memoizedData.certifications.length > 0 && (
          <CertificationsSection certifications={memoizedData.certifications} />
        )}

        {/* Achievements Section */}
        {memoizedData.achievements && memoizedData.achievements.length > 0 && (
          <AchievementsSection achievements={memoizedData.achievements} />
        )}
      </motion.div>

      {/* Download Success Notification */}
      <DownloadSuccess
        isVisible={showDownloadSuccess}
        onClose={() => setShowDownloadSuccess(false)}
        filename={`${memoizedData.personal.name.replace(/\s+/g, '_')}_Resume.pdf`}
      />
    </motion.div>
  );
};

export default ResumeHub;
