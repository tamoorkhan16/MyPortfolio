/**
 * Resume Section
 *
 * Placeholder section for resume and CV information.
 */

import { motion } from 'framer-motion';

import { useInView } from '@hooks/useInView';
import { fadeInUp, staggerChildren } from '@utils/animations';

const ResumeSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      id="resume"
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={staggerChildren}
      style={{
        minHeight: '100vh',
        padding: 'var(--spacing-3xl) var(--spacing-lg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-background)',
      }}
    >
      <motion.h2
        variants={fadeInUp}
        style={{
          fontSize: 'var(--font-size-3xl)',
          fontWeight: 'var(--font-weight-bold)',
          marginBottom: 'var(--spacing-xl)',
          color: 'var(--color-text)',
        }}
      >
        Resume & Experience
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        style={{
          fontSize: 'var(--font-size-base)',
          color: 'var(--color-text-secondary)',
          maxWidth: '600px',
          textAlign: 'center',
        }}
      >
        Professional experience and educational background.
        Coming soon...
      </motion.p>
    </motion.section>
  );
};

export default ResumeSection;
