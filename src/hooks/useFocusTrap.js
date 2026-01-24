/**
 * useFocusTrap Hook
 *
 * Traps keyboard focus within a container element.
 * Essential for accessible modals and dialogs.
 *
 * When active, Tab/Shift+Tab will cycle focus within focusable elements
 * instead of allowing focus to escape the container.
 *
 * @param {RefObject} containerRef - Reference to container element
 * @param {boolean} isActive - Whether focus trap is active (default: true)
 *
 * @example
 * const containerRef = useRef(null);
 * useFocusTrap(containerRef, isOpen);
 *
 * <div ref={containerRef}>
 *   <input />
 *   <button>Submit</button>
 * </div>
 */

import { useEffect, useCallback } from 'react';

const getFocusableElements = (container) => {
  if (!container) return [];

  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ];

  return Array.from(
    container.querySelectorAll(focusableSelectors.join(','))
  ).filter((element) => {
    // Ensure element is visible
    return (
      element.offsetParent !== null &&
      getComputedStyle(element).visibility !== 'hidden'
    );
  });
};

export const useFocusTrap = (containerRef, isActive = true) => {
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key !== 'Tab') {
        return;
      }

      const container = containerRef.current;
      if (!container) {
        return;
      }

      const focusableElements = getFocusableElements(container);
      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const activeElement = document.activeElement;
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // Shift+Tab on first element - cycle to last
      if (event.shiftKey) {
        if (activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab on last element - cycle to first
        if (activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    },
    [containerRef]
  );

  useEffect(() => {
    if (!isActive) {
      return;
    }

    const container = containerRef.current;
    if (!container) {
      return;
    }

    container.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive, handleKeyDown, containerRef]);
};

export default useFocusTrap;
