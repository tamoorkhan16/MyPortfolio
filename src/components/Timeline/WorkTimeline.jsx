// WorkTimeline.jsx
// See plan for full implementation details.












import { useScroll, useTransform, AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import useMagneticEffect from '../../hooks/useMagneticEffect';
import * as easings from '../../utils/easings';

import WorkDetailCard from './WorkDetailCard';
import styles from './WorkTimeline.module.css';

function WorkTimeline({ experiences, variant = 'vertical' }) {
  const containerRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const hoverTimeout = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = e => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);


  // Layout constants
  const nodeGap = isMobile ? 100 : 120;
  const startY = 40;
  const startX = 50;
  const horizontalGap = 140;
  const timelineLength = (experiences.length - 1) * nodeGap;

  // Node positions and path for each variant
  const { pathData, nodePositions, svgWidth, svgHeight, viewBox } = useMemo(() => {
    if (isMobile || variant === 'vertical') {
      // Vertical timeline (default/mobile)
      const positions = experiences.map((_, i) => ({ x: startX, y: startY + i * nodeGap }));
      const path = `M ${startX} ${startY} L ${startX} ${startY + timelineLength}`;
      return {
        pathData: path,
        nodePositions: positions,
        svgWidth: 100,
        svgHeight: startY + nodeGap * experiences.length,
        viewBox: `0 0 100 ${startY + nodeGap * experiences.length}`,
      };
    } else if (variant === 'horizontal') {
      // Horizontal timeline
      const y = 60;
      const positions = experiences.map((_, i) => ({ x: startX + i * horizontalGap, y }));
      const path = `M ${startX} ${y} L ${startX + (experiences.length - 1) * horizontalGap} ${y}`;
      return {
        pathData: path,
        nodePositions: positions,
        svgWidth: startX + horizontalGap * experiences.length,
        svgHeight: 120,
        viewBox: `0 0 ${startX + horizontalGap * experiences.length} 120`,
      };
    } else if (variant === 'curved') {
      // S-curve timeline (alternates up/down)
      const positions = [];
      let path = `M ${startX} ${startY}`;
      let x = startX, y = startY;
      for (let i = 0; i < experiences.length; i++) {
        positions.push({ x, y });
        if (i < experiences.length - 1) {
          const nextX = x + horizontalGap;
          const curveY = y + (i % 2 === 0 ? 60 : -60);
          path += ` Q ${(x + nextX) / 2} ${curveY}, ${nextX} ${y}`;
          x = nextX;
        }
      }
      return {
        pathData: path,
        nodePositions: positions,
        svgWidth: startX + horizontalGap * experiences.length,
        svgHeight: 220,
        viewBox: `0 0 ${startX + horizontalGap * experiences.length} 220`,
      };
    }
    // fallback vertical
    const positions = experiences.map((_, i) => ({ x: startX, y: startY + i * nodeGap }));
    const path = `M ${startX} ${startY} L ${startX} ${startY + timelineLength}`;
    return {
      pathData: path,
      nodePositions: positions,
      svgWidth: 100,
      svgHeight: startY + nodeGap * experiences.length,
      viewBox: `0 0 100 ${startY + nodeGap * experiences.length}`,
    };
  }, [experiences, variant, isMobile, nodeGap, startX, startY, horizontalGap, timelineLength]);

  // Scroll progress indicator
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Node click handler
  const handleNodeClick = useCallback((exp, idx, e) => {
    // Compute pixel position of the clicked node
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = {
      x: rect.left + rect.width / 2 + window.scrollX,
      y: rect.top + rect.height / 2 + window.scrollY,
    };
    setSelectedNode({ exp, idx, position: pos });
  }, []);

  // Node hover handler (open card on hover with delay, not on mobile)
  const handleNodeHover = useCallback((exp, idx, e) => {
    setHoveredNode(idx);
    if (isMobile) return;
    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = {
        x: rect.left + rect.width / 2 + window.scrollX,
        y: rect.top + rect.height / 2 + window.scrollY,
      };
      setSelectedNode({ exp, idx, position: pos });
    }, 120);
  }, [isMobile]);
  const handleNodeLeave = useCallback(() => {
    setHoveredNode(null);
    clearTimeout(hoverTimeout.current);
    if (!isMobile) setSelectedNode(null);
  }, [isMobile]);

  return (
    <section className={styles.timeline} ref={containerRef}>
      {/* Progress Indicator */}
      <motion.div
        className={styles.progress}
        style={{ scaleY: progress }}
        aria-label="Scroll progress"
      >
        <motion.span className={styles.progressText}>
          {useTransform(scrollYProgress, v => `${Math.round(v * 100)}%`)}
        </motion.span>
      </motion.div>
      {/* SVG Path */}
      <svg
        className={styles.svgContainer}
        width={svgWidth}
        height={svgHeight}
        viewBox={viewBox}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="timeline-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <motion.path
          d={pathData}
          stroke="url(#timeline-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength }}
          transition={{ duration: 1.2, ease: easings.easeOutExpo }}
        />
      </svg>
      {/* Timeline Nodes */}
      <div className={styles.nodes}>
        {experiences.map((exp, idx) => {
          const { x, y } = nodePositions[idx];
          return (
            <TimelineNode
              key={exp.id || idx}
              exp={exp}
              idx={idx}
              x={x}
              y={y}
              isActive={hoveredNode === idx}
              onHover={e => handleNodeHover(exp, idx, e)}
              onLeave={handleNodeLeave}
              onClick={e => handleNodeClick(exp, idx, e)}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleNodeClick(exp, idx, e)}
            />
          );
        })}
      </div>
      {/* Detail Card Modal */}
      <AnimatePresence mode="wait">
        {selectedNode && (
          <WorkDetailCard
            experience={selectedNode.exp}
            isOpen={!!selectedNode}
            onClose={() => setSelectedNode(null)}
            position={selectedNode.position}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// TimelineNode sub-component for magnetic effect
const TimelineNode = React.memo(function TimelineNode({ exp, idx, x, y, isActive, onHover, onLeave, onClick, onKeyDown }) {
  const nodeRef = React.useRef(null);
  const { x: mx, y: my } = useMagneticEffect({ elementRef: nodeRef, strength: 0.4, radius: 80 });
  return (
    <motion.div
      ref={nodeRef}
      className={styles.node}
      style={{ left: x - 30, top: y - 30 }}
      layoutId={`timeline-node-${idx}`}
      animate={{ x: mx, y: my, scale: isActive ? 1.15 : 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${exp.position} at ${exp.company}`}
      onKeyDown={onKeyDown}
    >
      <div className={styles.nodeInner}>
        {/* Company logo/icon here if available */}
        <span>{exp.icon || exp.company[0]}</span>
      </div>
      <div className={styles.nodeLabel}>{exp.position} <br /> <span>{exp.dateRange}</span></div>
    </motion.div>
  );
});

export default WorkTimeline;
