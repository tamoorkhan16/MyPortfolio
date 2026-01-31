import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * ReactDemo Component
 * Interactive counter demonstrating React hooks
 */
const ReactDemo = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h4 style={{ marginTop: 0, color: 'var(--color-text)' }}>
        React Hooks - useState Example
      </h4>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center',
        }}
      >
        {/* Counter */}
        <div>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
            Counter: {count}
          </p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={() => setCount((c) => c - 1)}
              style={{
                padding: '0.5rem 1rem',
                background: 'var(--color-accent)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 500,
              }}
            >
              -
            </button>
            <button
              onClick={() => setCount(0)}
              style={{
                padding: '0.5rem 1rem',
                background: 'var(--color-surface)',
                color: 'var(--color-text)',
                border: '1px solid var(--color-border)',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 500,
              }}
            >
              Reset
            </button>
            <button
              onClick={() => setCount((c) => c + 1)}
              style={{
                padding: '0.5rem 1rem',
                background: 'var(--color-accent)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 500,
              }}
            >
              +
            </button>
          </div>
        </div>

        {/* Text Input */}
        <div>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
            Input: {inputValue || '(empty)'}
          </p>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type something..."
            style={{
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              color: 'var(--color-text)',
              fontSize: '0.95rem',
              width: '250px',
              maxWidth: '100%',
            }}
          />
        </div>

        {/* Animated Display */}
        {count > 0 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            style={{
              width: Math.min(100 + count * 10, 300),
              height: Math.min(100 + count * 10, 300),
              background: 'linear-gradient(135deg, var(--color-accent), var(--color-primary))',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            {count}
          </motion.div>
        )}
      </div>

      <p
        style={{
          marginTop: '1.5rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}
      >
        This demo shows useState hook for managing component state with multiple pieces of data.
      </p>
    </div>
  );
};

export default ReactDemo;
