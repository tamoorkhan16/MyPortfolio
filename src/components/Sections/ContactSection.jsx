/**
 * Contact Section
 *
 * Placeholder section for contact information and communication.
 */

import { motion } from 'framer-motion';

import { useInView } from '@hooks/useInView';
import { fadeInUp, staggerChildren } from '@utils/animations';

const ContactSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      id="contact"
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
        Get In Touch
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
        Let&apos;s connect and discuss opportunities. Contact information coming soon...
      </motion.p>
    </motion.section>
  );
};

export default ContactSection;
