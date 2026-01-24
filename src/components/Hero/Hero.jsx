/**
 * Hero Component
 *
 * Full viewport height hero section with magnetic mouse tracking,
 * parallax effects, and animated content. Features staggered reveals
 * and glassmorphic CTA buttons with interactive gestures.
 *
 * Includes scroll indicator and respects accessibility preferences.
 */

import { motion, useTransform, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

import ScrollIndicator from '@components/ScrollIndicator/ScrollIndicator';
import { useInView } from '@hooks/useInView';
import { useMagneticEffect } from '@hooks/useMagneticEffect';
import { useScrollProgress } from '@hooks/useScrollProgress';

import { fadeInUp, staggerChildren, hover, tap, spring } from '@utils/animations';
import { PARALLAX_STRENGTH_SUBTLE, PARALLAX_STRENGTH, PARALLAX_STRENGTH_STRONG } from '@utils/animationConstants';
import styles from './Hero.module.css';

/**
 * Main Hero Section Component
 */
export const Hero = () => {
  const { ref: heroRef, isInView } = useInView();
  const { scrollYProgress } = useScrollProgress();

  // Parallax layers with different speeds
  const bgParallax = useTransform(scrollYProgress, [0, 0.5], [0, 100 * PARALLAX_STRENGTH_SUBTLE]);
  const midParallax = useTransform(scrollYProgress, [0, 0.5], [0, 100 * PARALLAX_STRENGTH]);
  const fgParallax = useTransform(scrollYProgress, [0, 0.5], [0, 100 * PARALLAX_STRENGTH_STRONG]);

  return (
    <motion.section
      ref={heroRef}
      className={styles.hero}
      variants={staggerChildren}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      aria-label="Hero section - Welcome to my portfolio"
    >
      {/* Parallax Background Layers */}
      <motion.div
        className={styles.bgLayer}
        style={{ y: bgParallax }}
        aria-hidden="true"
      />

      <motion.div
        className={styles.midLayer}
        style={{ y: midParallax }}
        aria-hidden="true"
      />

      <motion.div
        className={styles.fgLayer}
        style={{ y: fgParallax }}
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className={styles.contentContainer}>
        {/* Headline */}
        <motion.h1
          className={styles.headline}
          variants={fadeInUp}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
        >
          Creative Developer & Designer
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className={styles.subheadline}
          variants={fadeInUp}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
        >
          Crafting beautiful, interactive experiences with React, Framer Motion,
          and modern web technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className={styles.ctaContainer}
          variants={fadeInUp}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
        >
          <MagneticButton variant="primary" href="#projects">
            View My Work
          </MagneticButton>

          <MagneticButton variant="secondary" href="#contact">
            Get In Touch
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <AnimatePresence>
        <ScrollIndicator />
      </AnimatePresence>
    </motion.section>
  );
};

/**
 * Magnetic Button Component
 *
 * Interactive button with magnetic mouse tracking effect.
 * Uses spring physics for smooth, responsive motion.
 */
const MagneticButton = ({ variant = 'primary', href, children }) => {
  const buttonRef = useRef(null);
  const { x, y } = useMagneticEffect({
    elementRef: buttonRef,
    strength: 0.2,
    radius: 150,
  });

  const handleClick = (e) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`${styles.ctaButton} ${styles[`cta_${variant}`]}`}
      animate={{ x, y }}
      transition={spring.snappy}
      whileHover={hover.lift.whileHover}
      whileTap={tap.press.whileTap}
      onClick={handleClick}
      aria-label={`Navigate to ${href.replace('#', '')}`}
    >
      {children}
    </motion.button>
  );
};

export default Hero;
