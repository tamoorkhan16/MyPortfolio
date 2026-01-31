import { useEffect, useRef } from 'react';

/**
 * Custom hook to prevent body scroll
 * Useful for modal and lightbox components
 */
const useBodyScrollLock = (isActive = true) => {
  const previousOverflowRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    // Store original overflow value
    previousOverflowRef.current = document.body.style.overflow;

    // Lock scroll
    document.body.style.overflow = 'hidden';

    // Cleanup on unmount or deactivation
    return () => {
      if (previousOverflowRef.current !== null) {
        document.body.style.overflow = previousOverflowRef.current;
      }
    };

  }, [isActive]);
};

export default useBodyScrollLock;
