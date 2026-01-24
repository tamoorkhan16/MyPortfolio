/**
 * AnimatedSection Component
 *
 * Reusable wrapper for section components with automatic scroll-triggered animations.
 * Uses intersection observer to trigger staggered children animations when section enters viewport.
 */

import { motion } from 'framer-motion';

import { useInView } from '@hooks/useInView';

export const AnimatedSection = ({
  children,
  id,
  staggerDelay = 0.1,
  className = '',
  ...props
}) => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    initial: 'initial',
    animate: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      variants={containerVariants}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
