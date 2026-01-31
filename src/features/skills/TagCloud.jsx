import { motion } from 'framer-motion';
import { useState, useRef, useMemo, useCallback, useEffect } from 'react';

import { useMousePosition } from '@hooks/useMousePosition';
import { tween } from '@utils/animations';

import styles from './TagCloud.module.css';

/**
 * TagCloud Component
 * 3D spherical tag cloud with mouse tracking and rotation
 */
const TagCloud = ({ skills, onTagClick }) => {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const mousePosition = useMousePosition();
  const [isHovering, setIsHovering] = useState(null);

  // Calculate 3D positions using spherical coordinates
  const positions = useMemo(() => {
    const positions = [];
    const totalTags = skills.length;
    const radius = 200;

    skills.forEach((skill, index) => {
      // Distribute tags evenly on sphere using golden angle
      const phi = Math.acos(-1 + (2 * index) / totalTags);
      const theta = Math.sqrt(totalTags * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      positions.push({ x, y, z, phi, theta });
    });

    return positions;
  }, [skills]);

  // Calculate rotation based on mouse position
  useEffect(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const distX = mousePosition.x - (rect.left + centerX);
    const distY = mousePosition.y - (rect.top + centerY);

    const rotX = (distY / rect.height) * 30;
    const rotY = (distX / rect.width) * 30;

    setRotation({ x: rotX, y: rotY });
  }, [mousePosition]);

  const handleTagClick = useCallback(
    (skill) => {
      if (onTagClick) {
        onTagClick(skill);
      }
    },
    [onTagClick]
  );

  return (
    <motion.div
      ref={containerRef}
      className={styles.cloudContainer}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={tween.smooth}
    >
      <motion.div
        className={styles.cloud}
        style={{
          perspective: '1000px',
        }}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 100,
          mass: 1,
        }}
      >
        {skills.map((skill, index) => {
          const pos = positions[index];
          const isVisible = pos.z > -150; // Only show tags in front hemisphere

          return (
            <motion.button
              key={skill.id}
              className={styles.tag}
              onClick={() => handleTagClick(skill)}
              onMouseEnter={() => setIsHovering(skill.id)}
              onMouseLeave={() => setIsHovering(null)}
              style={{
                x: pos.x,
                y: pos.y,
                z: pos.z,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: isVisible ? 1 : 0.3,
                scale: isVisible ? 1 : 0.8,
              }}
              whileHover={{
                scale: 1.2,
                zIndex: 100,
              }}
              transition={tween.smooth}
              aria-label={`${skill.name} skill - ${skill.proficiency}% proficiency`}
              title={skill.description}
            >
              <span className={styles.icon}>{skill.icon}</span>
              <span className={styles.name}>{skill.name}</span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Info text */}
      <motion.div
        className={styles.info}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovering ? 1 : 0.6, y: 0 }}
        transition={tween.smooth}
      >
        <p>Hover and move your mouse to rotate</p>
      </motion.div>
    </motion.div>
  );
};

export default TagCloud;
