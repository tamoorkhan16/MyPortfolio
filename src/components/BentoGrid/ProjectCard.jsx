import { motion } from 'framer-motion';
import React, { useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { getCardClassName } from './gridUtils';
import styles from './ProjectCard.module.css';

import { useMagneticEffect } from '@hooks/useMagneticEffect';

import { fadeInUp, tween } from '@utils/animations';

/**
 * ProjectCard Component
 * Interactive card with magnetic effects, glassmorphic overlay, and animations
 */
const ProjectCard = React.memo(
  ({ project, gridSize, breakpoint, tabIndex = 0 }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);
    const { x, y } = useMagneticEffect(cardRef, {
      strength: 0.2,
      radius: 80,
    });

    const cardClassName = getCardClassName(gridSize);
    const showDescription = breakpoint !== 'mobile' || isHovered;

    const handleCardClick = useCallback(() => {
      navigate(`/projects/${project.id}`);
    }, [navigate, project.id]);

    const handleKeyDown = useCallback(
      (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate(`/projects/${project.id}`);
        }
      },
      [navigate, project.id]
    );

    return (
      <motion.div
        ref={cardRef}
        className={`${styles.projectCard} ${styles[cardClassName]}`}
        variants={fadeInUp}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
        style={{
          x: typeof x === 'number' ? x : 0,
          y: typeof y === 'number' ? y : 0,
          cursor: 'pointer',
        }}
        tabIndex={tabIndex}
        onKeyDown={handleKeyDown}
        role="article"
        aria-label={`${project.title} - ${project.category}`}
        data-project-id={project.id}
      >
        {/* Background Image */}
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          className={styles.cardImage}
          loading="lazy"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={tween.smooth}
        />

        {/* Gradient Overlay */}
        <div className={styles.gradient} />

        {/* Content Layer */}
        <motion.div
          className={styles.cardContent}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={tween.smooth}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className={styles.header}>
            <h3 className={styles.title}>{project.title}</h3>
            <span className={`${styles.badge} ${styles[`badge-${project.category}`]}`}>
              {project.category}
            </span>
          </div>

          {showDescription && (
            <p className={styles.description}>{project.description}</p>
          )}

          {/* Tags */}
          <div className={styles.tags}>
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className={styles.tag}>+{project.tags.length - 3}</span>
            )}
          </div>
        </motion.div>

        {/* Hover Overlay - Glassmorphic */}
        <motion.div
          className={styles.hoverOverlay}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={tween.smooth_fast}
        >
          <motion.div
            className={styles.overlayContent}
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={tween.smooth}
          >
            <p className={styles.overlayDescription}>{project.description}</p>

            <div className={styles.actions}>
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Live
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Code
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
