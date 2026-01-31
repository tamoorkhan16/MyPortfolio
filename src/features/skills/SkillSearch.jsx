import { motion } from 'framer-motion';
import { useCallback, useMemo, useState } from 'react';

import { SKILLS } from '@data/skills';

import styles from './SkillSearch.module.css';

/**
 * SkillSearch Component
 * Search and filter skills with fuzzy matching
 */
const SkillSearch = ({ onSelectSkill = () => {} }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Simple fuzzy search implementation
  const fuzzyMatch = useCallback((query, text) => {
    const queryLower = query.toLowerCase();
    const textLower = text.toLowerCase();

    if (!queryLower) return true;
    if (textLower.includes(queryLower)) return true;

    let queryIndex = 0;
    for (let i = 0; i < textLower.length; i++) {
      if (textLower[i] === queryLower[queryIndex]) {
        queryIndex++;
      }
      if (queryIndex === queryLower.length) return true;
    }
    return false;
  }, []);

  // Filter skills based on search query
  const filteredSkills = useMemo(() => {
    if (!searchQuery.trim()) return [];

    return SKILLS.filter(
      (skill) =>
        fuzzyMatch(searchQuery, skill.name) ||
        fuzzyMatch(searchQuery, skill.description) ||
        fuzzyMatch(searchQuery, skill.category)
    ).slice(0, 8); // Limit to 8 results
  }, [searchQuery, fuzzyMatch]);

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.inputWrapper}>
        <span className={styles.icon}>🔍</span>
        <input
          type="text"
          className={styles.input}
          placeholder="Search skills (React, design, backend...)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search skills"
        />
        {searchQuery && (
          <motion.button
            className={styles.clearButton}
            onClick={handleClear}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            aria-label="Clear search"
          >
            ✕
          </motion.button>
        )}
      </div>

      {/* Search Results */}
      {searchQuery && (
        <motion.div
          className={styles.results}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {filteredSkills.length > 0 ? (
            <ul className={styles.resultsList}>
              {filteredSkills.map((skill, index) => (
                <motion.li
                  key={skill.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    className={styles.resultItem}
                    onClick={() => {
                      onSelectSkill(skill);
                      setSearchQuery('');
                    }}
                  >
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    <div className={styles.skillInfo}>
                      <p className={styles.skillName}>{skill.name}</p>
                      <p className={styles.skillCategory}>{skill.category}</p>
                    </div>
                    <span className={styles.proficiency}>{skill.proficiency}%</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          ) : (
            <motion.div
              className={styles.noResults}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>No skills found matching &quot;{searchQuery}&quot;</p>
              <p className={styles.hint}>Try searching for a different skill or category</p>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default SkillSearch;
