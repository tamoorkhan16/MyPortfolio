/**
 * Fuzzy Search Utility
 *
 * Lightweight fuzzy search algorithm for filtering and ranking results.
 * No external dependencies - pure JavaScript implementation.
 *
 * Fuzzy matching allows characters to appear in any order (not necessarily consecutive)
 * which is perfect for command palettes and quick search interfaces.
 */

/**
 * Check if query matches target using fuzzy matching
 *
 * All characters from query must appear in target in order,
 * but don't need to be consecutive.
 *
 * @param {string} query - Search query to match
 * @param {string} target - String to search in
 * @returns {boolean} True if query matches target
 *
 * @example
 * fuzzyMatch('prj', 'projects') // true
 * fuzzyMatch('cmd', 'command') // true
 * fuzzyMatch('xyz', 'hello') // false
 */
export const fuzzyMatch = (query, target) => {
  if (!query || !target) return !query;

  const queryLower = query.toLowerCase();
  const targetLower = target.toLowerCase();

  let queryIndex = 0;

  for (let targetIndex = 0; targetIndex < targetLower.length; targetIndex++) {
    if (queryLower[queryIndex] === targetLower[targetIndex]) {
      queryIndex++;

      // All characters matched
      if (queryIndex === queryLower.length) {
        return true;
      }
    }
  }

  return false;
};

/**
 * Calculate match score for ranking results
 *
 * Scoring considers:
 * - Exact match (highest priority)
 * - Start-of-string match
 * - Consecutive character matches
 * - Position proximity
 *
 * @param {string} query - Search query
 * @param {string} target - String being scored
 * @returns {number} Score (higher is better)
 *
 * @private
 */
const calculateMatchScore = (query, target) => {
  if (!query) return 0;

  const queryLower = query.toLowerCase();
  const targetLower = target.toLowerCase();

  // Exact match - highest score
  if (queryLower === targetLower) {
    return 1000;
  }

  // Start of string match
  if (targetLower.startsWith(queryLower)) {
    return 500 + (100 - targetLower.length);
  }

  // Find where characters match and calculate streak
  let score = 0;
  let queryIndex = 0;
  let consecutiveMatches = 0;
  let maxConsecutiveMatches = 0;

  for (let targetIndex = 0; targetIndex < targetLower.length; targetIndex++) {
    if (
      queryIndex < queryLower.length &&
      queryLower[queryIndex] === targetLower[targetIndex]
    ) {
      // Match found
      consecutiveMatches++;
      maxConsecutiveMatches = Math.max(maxConsecutiveMatches, consecutiveMatches);

      // Bonus for early matches in string
      score += Math.pow(2, queryIndex) * (100 - targetIndex);

      queryIndex++;
    } else {
      consecutiveMatches = 0;
    }
  }

  // Add bonus for consecutive matches
  score += maxConsecutiveMatches * 50;

  return score;
};

/**
 * Fuzzy search through array of items
 *
 * Searches specified keys in items, ranks by match score, and returns sorted results.
 *
 * @param {string} query - Search query
 * @param {Array<Object>} items - Array of objects to search
 * @param {string[]} keys - Keys to search in each item (e.g., ['label', 'description'])
 * @returns {Array<Object>} Filtered and sorted items
 *
 * @example
 * const items = [
 *   { id: 1, label: 'Projects', description: 'View portfolio projects' },
 *   { id: 2, label: 'Project Details', description: 'See project details' },
 *   { id: 3, label: 'Skills', description: 'Technical skills' }
 * ];
 *
 * const results = fuzzySearch('proj', items, ['label', 'description']);
 * // Returns first two items sorted by relevance
 */
export const fuzzySearch = (query, items, keys = []) => {
  if (!query || !items || !Array.isArray(items)) {
    return items;
  }

  // Create array of items with scores
  const scoredItems = items
    .map((item) => {
      let score = 0;

      // Calculate score across all specified keys
      keys.forEach((key) => {
        const value = item[key];

        if (typeof value === 'string') {
          // Single string value
          if (fuzzyMatch(query, value)) {
            score += calculateMatchScore(query, value);
          }
        } else if (Array.isArray(value)) {
          // Array of values (e.g., keywords)
          value.forEach((v) => {
            if (typeof v === 'string' && fuzzyMatch(query, v)) {
              score += calculateMatchScore(query, v) * 0.5; // Slightly lower weight for array items
            }
          });
        }
      });

      return { item, score };
    })
    .filter(({ score }) => score > 0) // Keep only matching items
    .sort((a, b) => b.score - a.score); // Sort by score descending

  return scoredItems.map(({ item }) => item);
};

export default {
  fuzzyMatch,
  fuzzySearch,
};
