/**
 * Portal Component
 *
 * Renders children into a portal container outside the main React tree.
 * Perfect for modals, overlays, and popovers that need to escape stacking contexts.
 *
 * Uses ReactDOM.createPortal for rendering in a separate DOM hierarchy.
 */

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

/**
 * Portal Component
 *
 * @param {React.ReactNode} children - Content to render in the portal
 * @param {string} containerId - ID of the portal container element (default: 'portal-root')
 *
 * @example
 * <Portal>
 *   <Modal>Content</Modal>
 * </Portal>
 *
 * <Portal containerId="custom-portal">
 *   <Tooltip>Tooltip content</Tooltip>
 * </Portal>
 */
export const Portal = ({ children, containerId = 'portal-root' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Get or create portal container
    let container = document.getElementById(containerId);

    if (!container) {
      // Create container if it doesn't exist (fallback)
      container = document.createElement('div');
      container.id = containerId;
      document.body.appendChild(container);
    }

    containerRef.current = container;

    return () => {
      // Note: Don't remove the container on unmount as it's expected to exist
      // This allows multiple portals to use the same container
    };
  }, [containerId]);

  // Don't render until container is ready
  if (!containerRef.current) {
    return null;
  }

  return createPortal(children, containerRef.current);
};

export default Portal;
