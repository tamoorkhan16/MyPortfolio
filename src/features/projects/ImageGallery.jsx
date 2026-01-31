import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';

import { useInView } from '@hooks/useInView';

import { tween } from '@utils/animations';

import styles from './ImageGallery.module.css';
import ImageLightbox from './ImageLightbox';

/**
 * ImageGallery Component
 * Responsive image grid with lightbox functionality
 */
const ImageGallery = ({ images = [] }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.1 });

  const handleImageClick = useCallback((index) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      <motion.section
        ref={ref}
        className={styles.galleryContainer}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={tween.smooth}
      >
        <div className={styles.gallery}>
          {images.map((image, index) => (
            <motion.div
              key={`${image}-${index}`}
              className={styles.imageWrapper}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={tween.smooth}
              viewport={{ once: true, margin: '-100px' }}
              onClick={() => handleImageClick(index)}
            >
              <motion.img
                src={image}
                alt={`Project image ${index + 1}`}
                className={styles.image}
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={tween.smooth}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Lightbox Modal */}
      <ImageLightbox
        images={images}
        isOpen={lightboxOpen}
        currentIndex={selectedIndex}
        onClose={handleCloseLightbox}
        onIndexChange={setSelectedIndex}
      />
    </>
  );
};

export default ImageGallery;
