import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useMemo, useCallback } from 'react';

import styles from './BentoGrid.module.css';
import { getResponsiveColumns, getBreakpoint, optimizeGridLayout, calculateGridSpan, hasNoProjects } from './gridUtils';

import { fadeInScale, staggerChildrenFast, tween } from '@utils/animations';

import ProjectCard from './ProjectCard';

/**
 * BentoGrid Container Component
 * Manages responsive grid layout, filtering, and animated reordering
 */
const BentoGrid = ({ projects, activeCategory, sortBy = 'featured' }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Handle window resize for responsive behavior
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [projects, activeCategory]);

  // Sort and optimize layout
  const optimizedProjects = useMemo(() => {
    const sorted = [...filteredProjects];
    
    if (sortBy === 'featured') {
      sorted.sort((a, b) => (b.featured ? 1 : -1));
    } else if (sortBy === 'alphabetical') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    return optimizeGridLayout(sorted);
  }, [filteredProjects, sortBy]);

  // Calculate responsive grid properties
  const breakpoint = getBreakpoint(windowWidth);
  const columnCount = getResponsiveColumns(windowWidth);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e) => {
    const focusedCard = document.activeElement;
    if (!focusedCard?.dataset.projectId) return;

    const cards = document.querySelectorAll('[data-project-id]');
    const currentIndex = Array.from(cards).indexOf(focusedCard);

    let nextIndex = currentIndex;
    
    if (e.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % cards.length;
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      nextIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      nextIndex = Math.min(currentIndex + columnCount, cards.length - 1);
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      nextIndex = Math.max(currentIndex - columnCount, 0);
      e.preventDefault();
    }

    if (nextIndex !== currentIndex) {
      cards[nextIndex]?.focus();
    }
  }, [columnCount]);

  if (hasNoProjects(optimizedProjects)) {
    return (
      <motion.div
        className={styles.emptyState}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={tween.smooth}
      >
        <p>No projects found in this category</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={styles.gridWrapper}
      onKeyDown={handleKeyDown}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={tween.smooth}
    >
      <motion.div
        className={styles.bentoGrid}
        style={{
          gridTemplateColumns: `repeat(${columnCount}, minmax(300px, 1fr))`,
        }}
        variants={staggerChildrenFast}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <AnimatePresence mode="popLayout">
          {optimizedProjects.map((project) => {
            const gridSpan = calculateGridSpan(project.gridSize, breakpoint);
            
            return (
              <motion.div
                key={project.id}
                layout
                layoutId={`project-${project.id}`}
                variants={fadeInScale}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={tween.smooth}
                style={{
                  gridRow: `span ${gridSpan.gridRowSpan}`,
                  gridColumn: `span ${gridSpan.gridColumnSpan}`,
                }}
                data-project-id={project.id}
              >
                <ProjectCard
                  project={project}
                  gridSize={project.gridSize}
                  breakpoint={breakpoint}
                  tabIndex={0}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default BentoGrid;
