import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import {
  toggleTheme,
  setTheme,
  selectThemeMode,
  toggleUseSystemPreference,
  selectUseSystemPreference,
} from './themeSlice';
import styles from './ThemeToggle.module.css';

const iconVariants = {
  initial: { rotate: -180, opacity: 0 },
  animate: { rotate: 0, opacity: 1 },
  exit: { rotate: 180, opacity: 0 },
};

const springConfig = {
  type: 'spring',
  stiffness: 200,
  damping: 20,
};

const THEME_OPTIONS = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'custom', label: 'Custom' },
];

export function ThemeToggle() {
  const dispatch = useDispatch();
  const themeMode = useSelector(selectThemeMode);
  const useSystemPreference = useSelector(selectUseSystemPreference);
  const isDark = themeMode === 'dark';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  const handleSelectTheme = (themeName) => {
    dispatch(setTheme(themeName));
    setIsMenuOpen(false);
  };

  const handleToggleSystemPreference = () => {
    dispatch(toggleUseSystemPreference());
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className={styles.themeContainer}>
      <motion.button
        className={styles.toggleButton}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        role="switch"
        aria-checked={isDark}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={springConfig}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isDark ? 'moon' : 'sun'}
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={springConfig}
            className={styles.icon}
          >
            {isDark ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </motion.div>
        </AnimatePresence>

        <div className={styles.tooltip}>
          Switch to {isDark ? 'light' : 'dark'} mode
        </div>
      </motion.button>

      <motion.button
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        role="button"
        aria-label="Open theme menu"
        aria-expanded={isMenuOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={springConfig}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.menu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={springConfig}
          >
            {THEME_OPTIONS.map((option) => (
              <button
                key={option.value}
                className={`${styles.menuItem} ${
                  themeMode === option.value ? styles.active : ''
                }`}
                onClick={() => handleSelectTheme(option.value)}
                role="menuitem"
                aria-current={themeMode === option.value}
              >
                {option.label}
                {themeMode === option.value && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            ))}
            <div className={styles.menuDivider} />
            <button
              className={styles.menuItem}
              onClick={handleToggleSystemPreference}
              role="menuitem"
              aria-pressed={useSystemPreference}
            >
              <span>Use System Theme</span>
              {useSystemPreference && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
