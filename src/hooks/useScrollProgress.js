/**
 * useScrollProgress Hook
 *
 * Tracks scroll progress for parallax effects and scroll-synced animations.
 * Leverages Framer Motion's useScroll for smooth, performant tracking.
 *
 * @param {Object} options - Configuration options
 * @param {RefObject} options.target - Element to track scrolling on (default: viewport)
 * @param {Object} options.offset - Custom scroll offset configuration
 * @param {Array} options.offset.top - [startViewport, startElement] percentages
 * @param {Array} options.offset.bottom - [endViewport, endElement] percentages
 *
 * @returns {Object} Scroll information
 * @returns {MotionValue} result.scrollX - Horizontal scroll progress (0-1)
 * @returns {MotionValue} result.scrollY - Vertical scroll progress (0-1)
 * @returns {MotionValue} result.scrollXProgress - Normalized horizontal progress
 * @returns {MotionValue} result.scrollYProgress - Normalized vertical progress
 *
 * @example - Basic usage
 * import { useScroll, useTransform } from 'framer-motion'
 * import { useScrollProgress } from '@hooks/useScrollProgress'
 *
 * function Component() {
 *   const { scrollYProgress } = useScrollProgress()
 *
 *   const backgroundColor = useTransform(
 *     scrollYProgress,
 *     [0, 1],
 *     ['rgb(0, 0, 0)', 'rgb(255, 255, 255)']
 *   )
 *
 *   return <motion.div style={{ backgroundColor }} />
 * }
 *
 * @example - Parallax effect
 * function HeroParallax() {
 *   const { scrollYProgress } = useScrollProgress()
 *
 *   const yParallax = useTransform(
 *     scrollYProgress,
 *     [0, 1],
 *     [0, -100]
 *   )
 *
 *   return <motion.div style={{ y: yParallax }} />
 * }
 */

import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const useScrollProgress = (options = {}) => {
  const { target, offset } = options;
  const targetRef = useRef(target || null);

  // Get scroll values from Framer Motion
  const scrollValues = useScroll({
    target: targetRef.current,
    offset: offset,
  });

  const { scrollX, scrollY, scrollXProgress, scrollYProgress } = scrollValues;

  return {
    scrollX,
    scrollY,
    scrollXProgress,
    scrollYProgress,
    targetRef,
  };
};

/**
 * Helper hook to create parallax effect
 *
 * @param {number} strength - Parallax strength multiplier (e.g., 0.5 for 50% speed)
 * @param {Object} options - useScrollProgress options
 *
 * @returns {Object} Parallax values
 * @returns {MotionValue} result.y - Y-axis parallax transform
 * @returns {MotionValue} result.x - X-axis parallax transform
 *
 * @example
 * const { y } = useParallax(0.5)
 * <motion.div style={{ y }} />
 */
export const useParallax = (strength = 0.5, options = {}) => {
  const { scrollYProgress, scrollXProgress } = useScrollProgress(options);

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -1000 * strength]
  );

  const x = useTransform(
    scrollXProgress,
    [0, 1],
    [0, -1000 * strength]
  );

  return { y, x };
};

export default useScrollProgress;
