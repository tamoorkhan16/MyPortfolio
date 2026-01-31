/**
 * Command Palette Component
 *
 * A fast, keyboard-driven command palette with fuzzy search.
 * Supports navigation, theme switching, and custom actions.
 *
 * Features:
 * - Keyboard shortcut activation (Ctrl+K / Cmd+K)
 * - Fuzzy search filtering
 * - Arrow key navigation with wrap-around
 * - Focus management and trapping
 * - Glassmorphic styling
 * - Smooth Framer Motion animations
 * - Full keyboard accessibility
 * - Screen reader support
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import Portal from '@components/Portal/Portal';
import { setTheme } from '@features/theme/themeSlice';
import { useFocusTrap } from '@hooks/useFocusTrap';
import { useKeyboardShortcut } from '@hooks/useKeyboardShortcut';
import { fadeIn, fadeInScale, staggerChildrenFast, tween } from '@utils/animations';
import { COMMAND_ITEMS } from '@utils/commandPaletteData';
import { fuzzySearch } from '@utils/fuzzySearch';

import styles from './CommandPalette.module.css';

/**
 * Main CommandPalette Component
 */
export const CommandPalette = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filteredItems, setFilteredItems] = useState(COMMAND_ITEMS);

  const inputRef = useRef(null);
  const listRef = useRef(null);
  const paletteRef = useRef(null);
  const previousFocusRef = useRef(null);

  // Fuzzy search memoized
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return COMMAND_ITEMS;
    }

    return fuzzySearch(searchQuery, COMMAND_ITEMS, [
      'label',
      'description',
      'keywords',
    ]);
  }, [searchQuery]);

  useEffect(() => {
    setFilteredItems(searchResults);
    setSelectedIndex(0);
  }, [searchResults]);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement;
      // Focus input after palette renders
      setTimeout(() => inputRef.current?.focus(), 0);
    } else if (previousFocusRef.current) {
      previousFocusRef.current.focus();
    }
  }, [isOpen]);

  // Focus trap
  useFocusTrap(paletteRef, isOpen);

  // Keyboard shortcut hook
  useKeyboardShortcut('k', ['ctrl', 'meta'], () => {
    onClose();
  });

  // Handle close
  const handleClose = useCallback(() => {
    setSearchQuery('');
    setSelectedIndex(0);
    onClose();
  }, [onClose]);

  // Execute command - MUST be defined before useEffects that depend on it
  const handleExecute = useCallback(
    (command) => {
      if (command.type === 'navigation') {
        // Handle navigation
        const element = document.querySelector(command.action);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (command.type === 'theme') {
        // Handle theme change
        dispatch(setTheme(command.action));
      } else if (command.type === 'action') {
        // Handle custom action
        if (typeof command.action === 'function') {
          command.action();
        }
      }

      handleClose();
    },
    [dispatch, handleClose]
  );

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  // Handle arrow keys and Enter to execute
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setSelectedIndex((prev) =>
          prev === filteredItems.length - 1 ? 0 : prev + 1
        );
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setSelectedIndex((prev) =>
          prev === 0 ? filteredItems.length - 1 : prev - 1
        );
      } else if (event.key === 'Enter') {
        event.preventDefault();
        if (filteredItems[selectedIndex]) {
          handleExecute(filteredItems[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredItems, handleExecute]);

  // Scroll selected item into view
  useEffect(() => {
    if (!listRef.current) return;

    const selectedElement = listRef.current.querySelector(
      `[data-index="${selectedIndex}"]`
    );

    if (selectedElement) {
      selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [selectedIndex]);

  // Handle item click
  const handleItemClick = useCallback(
    (index) => {
      setSelectedIndex(index);
      handleExecute(filteredItems[index]);
    },
    [filteredItems, handleExecute]
  );

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.backdrop}
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={handleClose}
              aria-hidden="true"
            />

            {/* Palette Container */}
            <motion.div
              ref={paletteRef}
              className={styles.palette}
              variants={fadeInScale}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={tween.smooth}
              role="dialog"
              aria-modal="true"
              aria-label="Command palette"
            >
              {/* Search Input */}
              <div className={styles.searchWrapper}>
                <span className={styles.searchIcon}>🔍</span>
                <input
                  ref={inputRef}
                  type="text"
                  className={styles.searchInput}
                  placeholder="Search commands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  role="combobox"
                  aria-expanded={isOpen}
                  aria-controls="command-list"
                  aria-autocomplete="list"
                  spellCheck="false"
                />
              </div>

              {/* Results List */}
              <motion.ul
                ref={listRef}
                className={styles.resultsList}
                id="command-list"
                role="listbox"
                variants={staggerChildrenFast}
                initial="initial"
                animate="animate"
              >
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      data-index={index}
                      className={`${styles.commandItem} ${
                        index === selectedIndex ? styles.selected : ''
                      }`}
                      onClick={() => handleItemClick(index)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      role="option"
                      aria-selected={index === selectedIndex}
                      variants={{
                        initial: { opacity: 0, x: -10 },
                        animate: { opacity: 1, x: 0 },
                      }}
                    >
                      {/* Icon */}
                      <span className={styles.itemIcon} aria-hidden="true">
                        {item.icon}
                      </span>

                      {/* Label and Description */}
                      <div className={styles.itemContent}>
                        <div className={styles.itemLabel}>{item.label}</div>
                        {item.description && (
                          <div className={styles.itemDescription}>
                            {item.description}
                          </div>
                        )}
                      </div>

                      {/* Type Badge */}
                      <span
                        className={`${styles.typeBadge} ${
                          styles[`badge_${item.type}`]
                        }`}
                      >
                        {item.type}
                      </span>
                    </motion.li>
                  ))
                ) : (
                  <motion.div
                    className={styles.emptyState}
                    variants={{
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                    }}
                  >
                    <p>No results found for &quot;{searchQuery}&quot;</p>
                    <p className={styles.emptyHint}>Try different keywords</p>
                  </motion.div>
                )}
              </motion.ul>

              {/* Footer with Keyboard Hints */}
              <div className={styles.footer}>
                <div className={styles.hints}>
                  <span className={styles.hint}>
                    <kbd>↑↓</kbd> Navigate
                  </span>
                  <span className={styles.hint}>
                    <kbd>↵</kbd> Select
                  </span>
                  <span className={styles.hint}>
                    <kbd>Esc</kbd> Close
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default CommandPalette;
