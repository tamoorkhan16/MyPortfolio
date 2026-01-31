/**
 * CertificationsSection Component
 * Displays professional certifications in grid layout
 */

import { motion } from 'framer-motion';

import styles from './CertificationsSection.module.css';

const CertificationsSection = ({ certifications = [] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.section className={styles.section} variants={containerVariants} initial="hidden" animate="visible">
      <h2 className={styles.heading}>Certifications</h2>

      <motion.div className={styles.grid} variants={containerVariants} initial="hidden" animate="visible">
        {certifications.map((cert) => (
          <motion.a
            key={cert.id}
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.logo}>{cert.logo}</div>
            <h3 className={styles.name}>{cert.name}</h3>
            <p className={styles.issuer}>{cert.issuer}</p>
            <p className={styles.date}>{new Date(cert.date).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
            })}</p>
            <p className={styles.credentialId}>ID: {cert.credentialId}</p>
            <div className={styles.arrow}>→</div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default CertificationsSection;
