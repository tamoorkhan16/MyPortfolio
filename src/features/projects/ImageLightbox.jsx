import { motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

import Portal from '@components/Portal/Portal';

import { useFocusTrap } from '@hooks/useFocusTrap';
import { useKeyboardNavigation } from '@hooks/useKeyboardNavigation';
import useBodyScrollLock from '@hooks/useBodyScrollLock';

import { tween } from '@utils/animations';

import styles from './ImageLightbox.module.css';

/**
 * ImageLightbox Component
 * Full-screen image viewer with keyboard navigation
 */
const ImageLightbox = ({
  images = [],
  isOpen = false,
  currentIndex = 0,
  onClose,
  onIndexChange,
}) => {
  const lightboxRef = useRef(null);

  // Lock body scroll when lightbox is open
  useBodyScrollLock(isOpen);

  // Trap focus in lightbox
  useFocusTrap(lightboxRef, isOpen);

  // Keyboard navigation
  useKeyboardNavigation({
    disabled: !isOpen,
    onEscape: onClose,
    onArrowLeft: () => {
      const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      onIndexChange(prevIndex);
    },
    onArrowRight: () => {
      const nextIndex = (currentIndex + 1) % images.length;
      onIndexChange(nextIndex);
    },
  });

  if (!isOpen) {
    return null;
  }

  const currentImage = images[currentIndex];

  return (
    <Portal>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="lightbox"
            className={styles.lightboxContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={tween.smooth}
          >
            {/* Backdrop */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={tween.smooth}
              onClick={onClose}
            />

            {/* Lightbox Content */}
            <motion.div
              ref={lightboxRef}
              className={styles.lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={tween.smooth}
              role="dialog"
              aria-modal="true"
              aria-label="Image lightbox viewer"
            >
              {/* Image Container */}
              <motion.div
                key={currentIndex}
                className={styles.imageContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={tween.smooth}
              >
                <img
                  src={currentImage}
                  alt={`${currentIndex + 1}`}
                  className={styles.lightboxImage}
                />
              </motion.div>

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <motion.button
                    className={styles.navButton}
                    style={{ left: 0 }}
                    onClick={() => {
                      const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
                      onIndexChange(prevIndex);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Previous image"
                  >
                    ←
                  </motion.button>

                  <motion.button
                    className={styles.navButton}
                    style={{ right: 0 }}
                    onClick={() => {
                      const nextIndex = (currentIndex + 1) % images.length;
                      onIndexChange(nextIndex);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Next image"
                  >
                    →
                  </motion.button>
                </>
              )}

              {/* Close Button */}
              <motion.button
                className={styles.closeButton}
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close lightbox"
              >
                ✕
              </motion.button>

              {/* Image Counter */}
              {images.length > 1 && (
                <div className={styles.imageCounter}>
                  {currentIndex + 1} / {images.length}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default ImageLightbox;
