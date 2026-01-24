/**
 * useMagneticEffect Hook
 *
 * Creates a magnetic attraction effect where an element follows the cursor
 * within a specified radius. Perfect for interactive buttons and UI elements.
 *
 * Uses smooth interpolation for natural, responsive motion.
 *
 * @param {Object} options - Configuration options
 * @param {RefObject} options.elementRef - Ref to the element for bounds calculation
 * @param {number} options.strength - Attraction strength (0-1, default: 0.3)
 * @param {number} options.radius - Radius of effect in pixels (default: 100)
 *
 * @returns {Object} { x, y } - Transform values for magnetic effect
 *
 * @example
 * const ref = useRef(null);
 * const { x, y } = useMagneticEffect({
 *   elementRef: ref,
 *   strength: 0.5,
 *   radius: 150
 * });
 *
 * <motion.button
 *   ref={ref}
 *   animate={{ x, y }}
 *   transition={{ type: 'spring', stiffness: 200, damping: 20 }}
 * >
 *   Magnetic Button
 * </motion.button>
 */

import { useEffect, useRef, useState } from 'react';

import { MAGNETIC_STRENGTH, MAGNETIC_RADIUS } from '@utils/animationConstants';

export const useMagneticEffect = (options = {}) => {
  const {
    elementRef,
    strength = MAGNETIC_STRENGTH,
    radius = MAGNETIC_RADIUS,
  } = options;

  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const element = elementRef?.current;
    if (!element) return;

    const handleMouseMove = (event) => {
      mouseRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        // Get element bounds
        const rect = element.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;

        // Calculate distance between cursor and element center
        const dx = mouseRef.current.x - elementCenterX;
        const dy = mouseRef.current.y - elementCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Only apply effect if within radius
        if (distance < radius) {
          // Calculate attraction based on proximity
          const distanceFactor = 1 - distance / radius;

          // Apply strength to attraction
          const attractionX = dx * strength * distanceFactor;
          const attractionY = dy * strength * distanceFactor;

          setTransform({
            x: attractionX,
            y: attractionY,
          });
        } else {
          // Reset to center when outside radius
          setTransform({ x: 0, y: 0 });
        }
      });
    };

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [elementRef, strength, radius]);

  return transform;
};

export default useMagneticEffect;
