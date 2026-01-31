import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

/**
 * ReduxDemo Component
 * Simple todo list demonstrating Redux Toolkit concepts
 * (Implemented with local state for demo purposes)
 */
const ReduxDemo = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn Redux', completed: true },
    { id: 2, text: 'Build a project', completed: false },
  ]);
  const [inputValue, setInputValue] = useState('');

  // Simulating Redux actions
  const addTodo = (text) => {
    if (text.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text,
          completed: false,
        },
      ]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter((t) => t.completed).length;
  const totalCount = todos.length;

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
      <h4 style={{ marginTop: 0, color: 'var(--color-text)', textAlign: 'center' }}>
        Redux Toolkit - Todo Example
      </h4>

      {/* Stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}
      >
        <div
          style={{
            background: 'var(--color-surface)',
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid var(--color-border)',
          }}
        >
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: '0 0 0.5rem 0' }}>
            Total
          </p>
          <p style={{ color: 'var(--color-accent)', fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
            {totalCount}
          </p>
        </div>
        <div
          style={{
            background: 'var(--color-surface)',
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid var(--color-border)',
          }}
        >
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: '0 0 0.5rem 0' }}>
            Completed
          </p>
          <p style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
            {completedCount}
          </p>
        </div>
      </div>

      {/* Input */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo(inputValue)}
          placeholder="Add a new todo..."
          style={{
            flex: 1,
            padding: '0.75rem',
            borderRadius: '6px',
            border: '1px solid var(--color-border)',
            background: 'var(--color-surface)',
            color: 'var(--color-text)',
            fontSize: '0.95rem',
          }}
        />
        <button
          onClick={() => addTodo(inputValue)}
          style={{
            padding: '0.75rem 1.5rem',
            background: 'var(--color-accent)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 500,
          }}
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <div
        style={{
          background: 'var(--color-surface)',
          borderRadius: '8px',
          border: '1px solid var(--color-border)',
          overflow: 'hidden',
        }}
      >
        <AnimatePresence mode="popLayout">
          {todos.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
              No todos yet. Add one to get started!
            </div>
          ) : (
            todos.map((todo) => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                layout
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  borderBottom: '1px solid var(--color-border)',
                  cursor: 'pointer',
                }}
                onClick={() => toggleTodo(todo.id)}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => {}}
                  style={{ cursor: 'pointer', width: '20px', height: '20px' }}
                />
                <span
                  style={{
                    flex: 1,
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? 'var(--color-text-secondary)' : 'var(--color-text)',
                    opacity: todo.completed ? 0.6 : 1,
                  }}
                >
                  {todo.text}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo(todo.id);
                  }}
                  style={{
                    padding: '0.5rem 0.75rem',
                    background: 'transparent',
                    color: 'var(--color-text-secondary)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                  }}
                >
                  Delete
                </button>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      <p
        style={{
          marginTop: '1.5rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
          textAlign: 'center',
        }}
      >
        This demo shows Redux patterns: actions (add/toggle/delete), state mutations, and selectors
        (completed count).
      </p>
    </div>
  );
};

export default ReduxDemo;
