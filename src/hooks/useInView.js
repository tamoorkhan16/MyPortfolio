/**
 * useInView Hook
 *
 * Detects when an element enters the viewport using Intersection Observer API.
 * Perfect for triggering scroll-based animations and lazy loading.
 *
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Percentage of element visibility (0-1, default: 0.1)
 * @param {string} options.rootMargin - Margin around observer area (default: '-50px')
 * @param {boolean} options.triggerOnce - Stop observing after first trigger (default: true)
 *
 * @returns {Object} { ref, isInView } - Ref to attach to element and visibility state
 *
 * @example
 * const { ref, isInView } = useInView();
 *
 * <motion.div
 *   ref={ref}
 *   initial="initial"
 *   animate={isInView ? "animate" : "initial"}
 *   variants={fadeInUp}
 * >
 *   Content that animates on scroll
 * </motion.div>
 */

import { useEffect, useRef, useState } from 'react';

import { REVEAL_THRESHOLD, REVEAL_ROOT_MARGIN } from '@utils/animationConstants';

export const useInView = (
  options = {
    threshold: REVEAL_THRESHOLD,
    rootMargin: REVEAL_ROOT_MARGIN,
    triggerOnce: true,
  }
) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Observer callback
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);

          // Stop observing after first trigger if triggerOnce is true
          if (options.triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!options.triggerOnce) {
          // Allow re-triggering if triggerOnce is false
          setIsInView(false);
        }
      });
    };

    // Create intersection observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: options.threshold || REVEAL_THRESHOLD,
      rootMargin: options.rootMargin || REVEAL_ROOT_MARGIN,
    });

    // Start observing
    observer.observe(element);

    // Cleanup on unmount
    return () => {
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce]);

  return { ref, isInView };
};

export default useInView;
