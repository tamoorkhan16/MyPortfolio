import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * FramerMotionDemo Component
 * Interactive draggable box demonstrating Framer Motion physics
 */
const FramerMotionDemo = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [rotation, setRotation] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h4 style={{ marginTop: 0, color: 'var(--color-text)' }}>
        Framer Motion - Draggable Animations
      </h4>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center',
        }}
      >
        {/* Interactive Draggable Box */}
        <div
          style={{
            width: '100%',
            height: '300px',
            background: 'var(--color-surface)',
            borderRadius: '12px',
            border: '1px dashed var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <motion.div
            drag
            dragElastic={0.2}
            dragTransition={{ power: 0.3, restDelta: 0.001 }}
            whileHover={{ scale: 1.1 }}
            whileDrag={{ scale: 1.2 }}
            onHoverStart={() => setIsAnimating(true)}
            onHoverEnd={() => setIsAnimating(false)}
            onDragStart={() => setIsAnimating(true)}
            onDragEnd={() => setIsAnimating(false)}
            style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, var(--color-accent), var(--color-primary))',
              borderRadius: '8px',
              cursor: 'grab',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            }}
          >
            <motion.div
              animate={{
                rotate: isAnimating ? [0, 360] : 0,
              }}
              transition={{
                duration: isAnimating ? 2 : 0,
                repeat: isAnimating ? Infinity : 0,
              }}
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✨
            </motion.div>
          </motion.div>
        </div>

        {/* Rotation Animation Demo */}
        <div>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
            Click to rotate
          </p>
          <motion.div
            animate={{ rotate: rotation }}
            transition={{ type: 'spring', stiffness: 100 }}
            onClick={() => setRotation((r) => r + 90)}
            style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
              borderRadius: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto',
              userSelect: 'none',
            }}
          >
            🎨
          </motion.div>
        </div>

        {/* Pulse Animation */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              '0 0 0 0 rgba(59, 130, 246, 0.4)',
              '0 0 0 10px rgba(59, 130, 246, 0)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            width: '60px',
            height: '60px',
            background: 'var(--color-accent)',
            borderRadius: '50%',
          }}
        />
      </div>

      <p
        style={{
          marginTop: '1.5rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}
      >
        Drag the box around, click the square to rotate, and watch the pulse animation. Framer Motion
        handles smooth spring physics animations automatically.
      </p>
    </div>
  );
};

export default FramerMotionDemo;
