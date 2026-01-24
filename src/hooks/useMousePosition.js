/**
 * useMousePosition Hook
 *
 * Tracks the global mouse/pointer position relative to the viewport.
 * Updates are debounced using requestAnimationFrame for optimal 60fps performance.
 *
 * @param {Object} options - Configuration options
 * @param {RefObject} options.elementRef - Optional ref to track position relative to element
 *
 * @returns {Object} { x, y } - Current mouse coordinates
 *
 * @example
 * const { x, y } = useMousePosition();
 *
 * // Use with magnetic effect hook
 * const magnetic = useMagneticEffect({ x, y, strength: 0.3 });
 *
 * @example With element tracking
 * const elementRef = useRef(null);
 * const { x, y } = useMousePosition({ elementRef });
 *
 * // Now x and y are relative to elementRef's position
 */

import { useEffect, useRef, useState } from 'react';

export const useMousePosition = (options = {}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Store the latest mouse position
      mouseRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      // Debounce using requestAnimationFrame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const elementRef = options.elementRef;

        let positionData = { ...mouseRef.current };

        // Calculate position relative to element if provided
        if (elementRef && elementRef.current) {
          const element = elementRef.current;
          const rect = element.getBoundingClientRect();

          positionData = {
            x: mouseRef.current.x - rect.left,
            y: mouseRef.current.y - rect.top,
          };
        }

        setPosition(positionData);
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
  }, [options.elementRef]);

  return position;
};

export default useMousePosition;
