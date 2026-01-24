/**
 * Navigation Component
 *
 * Fixed glassmorphic navigation bar with scroll-based visibility,
 * smooth scroll anchoring, and responsive mobile menu.
 *
 * Features:
 * - Auto-hide on scroll down, auto-show on scroll up
 * - Smooth scroll navigation to sections
 * - Active link highlighting based on viewport
 * - Integrated theme toggle
 * - Mobile hamburger menu
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState, useCallback } from 'react';

import { ThemeToggle } from '@features/theme/ThemeToggle';
import { slideInDown, tween } from '@utils/animations';

import MobileMenu from './MobileMenu';
import styles from './Navigation.module.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Main Navigation Component
 */
export const Navigation = () => {
  const navRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll direction for show/hide
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Show nav when scrolling up or at top
    if (currentScrollY < lastScrollY || currentScrollY < 100) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Hide nav when scrolling down
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  // Detect active section
  const detectActiveSection = useCallback(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter(Boolean);

    let currentSection = 'home';

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 3) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', detectActiveSection);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', detectActiveSection);
    };
  }, [handleScroll, detectActiveSection]);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        className={styles.nav}
        variants={slideInDown}
        initial="initial"
        animate={isVisible ? 'animate' : 'exit'}
        transition={tween.smooth}
      >
        {/* Logo/Brand */}
        <div className={styles.logo}>
          <a href="#home" onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}>
            Portfolio
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                label={link.label}
                href={link.href}
                isActive={activeSection === link.href.slice(1)}
                onClick={() => handleNavClick(link.href)}
              />
            </li>
          ))}
        </ul>

        {/* Right Section: Theme Toggle and Mobile Menu Button */}
        <div className={styles.rightSection}>
          <ThemeToggle />
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            links={NAV_LINKS}
            activeSection={activeSection}
            onLinkClick={handleNavClick}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

/**
 * Navigation Link Component
 *
 * Individual nav link with active state indicator
 */
const NavLink = ({ label, href, isActive, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <motion.a
      href={href}
      className={`${styles.navLink} ${isActive ? styles.active : ''}`}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
      {isActive && (
        <motion.div
          className={styles.activeIndicator}
          layoutId="activeIndicator"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </motion.a>
  );
};

export default Navigation;
