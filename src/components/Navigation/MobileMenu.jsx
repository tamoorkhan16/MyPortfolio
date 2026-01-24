/**
 * Mobile Menu Component
 *
 * Slide-out menu for mobile navigation. Features smooth animations,
 * backdrop overlay, and keyboard accessibility.
 */

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { slideInRight, fadeIn } from '@utils/animations';
import styles from './MobileMenu.module.css';

export const MobileMenu = ({ links, activeSection, onLinkClick, onClose }) => {
  const menuRef = useRef(null);

  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Handle outside click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className={styles.backdrop}
        variants={fadeIn}
        initial="initial"
        animate="animate"
        exit="exit"
        onClick={handleBackdropClick}
      />

      {/* Menu */}
      <motion.div
        ref={menuRef}
        className={styles.menu}
        variants={slideInRight}
        initial="initial"
        animate="animate"
        exit="exit"
        role="navigation"
        aria-label="Mobile menu"
      >
        <ul className={styles.menuLinks}>
          {links.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                className={`${styles.menuLink} ${
                  activeSection === link.href.slice(1) ? styles.active : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  onLinkClick(link.href);
                }}
                whileHover={{ x: 8 }}
                whileTap={{ x: 4 }}
                aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Close Button */}
        <motion.button
          className={styles.closeButton}
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Close menu"
        >
          <span />
          <span />
        </motion.button>
      </motion.div>
    </>
  );
};

export default MobileMenu;
