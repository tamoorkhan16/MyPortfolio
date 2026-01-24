/**
 * Skills Section
 *
 * Placeholder section showcasing technical skills and expertise.
 */

import { motion } from 'framer-motion';

import { useInView } from '@hooks/useInView';
import { fadeInUp, staggerChildren } from '@utils/animations';

const SkillsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      id="skills"
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
        background: 'linear-gradient(135deg, var(--color-background) 0%, var(--color-background-secondary) 100%)',
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
        Skills & Expertise
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
        Frontend development, UI/UX design, and animation expertise.
        Coming soon...
      </motion.p>
    </motion.section>
  );
};

export default SkillsSection;
