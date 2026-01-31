import { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

import { PROJECTS, getCategories } from '@data/projects';
import BentoGrid from '@components/BentoGrid/BentoGrid';
import CategoryFilter from '@components/BentoGrid/CategoryFilter';

import { useInView } from '@hooks/useInView';

import { fadeInUp, staggerChildren, tween } from '@utils/animations';

import styles from './ProjectsSection.module.css';

/**
 * ProjectsSection Component
 * Full Bento Grid implementation with category filtering and animations
 */
const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  // Get all categories
  const categories = useMemo(() => getCategories(), []);

  // Calculate project counts per category
  const projectCounts = useMemo(() => {
    const counts = {};
    categories.forEach((category) => {
      if (category === 'all') {
        counts[category] = PROJECTS.length;
      } else {
        counts[category] = PROJECTS.filter((p) => p.category === category).length;
      }
    });
    return counts;
  }, [categories]);

  // Handle category change
  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
    // Scroll to grid smoothly
    setTimeout(() => {
      const gridElement = document.querySelector('[data-projects-grid]');
      if (gridElement) {
        gridElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }, []);

  return (
    <motion.section
      ref={ref}
      className={styles.projectsSection}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={tween.smooth}
      id="projects"
      data-section="projects"
    >
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <h2 className={styles.heading}>Featured Projects</h2>
          </motion.div>
          <motion.p className={styles.subtitle} variants={fadeInUp}>
            A curated selection of my latest work across web, mobile, and design
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={tween.smooth}
        >
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            projectCounts={projectCounts}
          />
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          data-projects-grid
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={tween.smooth}
        >
          <BentoGrid
            projects={PROJECTS}
            activeCategory={activeCategory}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
