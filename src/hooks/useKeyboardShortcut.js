/**
 * useKeyboardShortcut Hook
 *
 * Listens for keyboard shortcuts and triggers a callback when matched.
 * Automatically detects platform (Mac vs Windows/Linux) for modifier keys.
 *
 * @param {string} key - The key to listen for (e.g., 'k', 'Enter', 'Escape')
 * @param {string[]} modifiers - Array of modifiers ('ctrl', 'meta', 'alt', 'shift')
 * @param {Function} callback - Function to call when shortcut is triggered
 *
 * @example
 * // Ctrl+K (Windows/Linux) or Cmd+K (Mac)
 * useKeyboardShortcut('k', ['ctrl', 'meta'], () => {
 *   setIsCommandPaletteOpen(true);
 * });
 *
 * @example
 * // Ctrl+Shift+P
 * useKeyboardShortcut('p', ['ctrl', 'shift'], () => {
 *   console.log('Command palette opened');
 * });
 */

import { useEffect, useCallback } from 'react';

export const useKeyboardShortcut = (key, modifiers = [], callback) => {
  // Memoize the event handler to prevent recreation on every render
  const handleKeyDown = useCallback(
    (event) => {
      // Normalize key to lowercase for comparison
      const pressedKey = event.key.toLowerCase();
      const targetKey = key.toLowerCase();

      // Check if the pressed key matches the target key
      if (pressedKey !== targetKey) {
        return;
      }

      // Check modifiers
      let allModifiersPressed = true;

      modifiers.forEach((modifier) => {
        const normalizedModifier = modifier.toLowerCase();

        if (normalizedModifier === 'ctrl') {
          if (!event.ctrlKey && !event.metaKey) {
            allModifiersPressed = false;
          }
        } else if (normalizedModifier === 'meta') {
          if (!event.metaKey) {
            allModifiersPressed = false;
          }
        } else if (normalizedModifier === 'alt') {
          if (!event.altKey) {
            allModifiersPressed = false;
          }
        } else if (normalizedModifier === 'shift') {
          if (!event.shiftKey) {
            allModifiersPressed = false;
          }
        }
      });

      // If all modifiers are pressed, prevent default and call callback
      if (allModifiersPressed) {
        event.preventDefault();
        callback();
      }
    },
    [key, modifiers, callback]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
};

export default useKeyboardShortcut;
