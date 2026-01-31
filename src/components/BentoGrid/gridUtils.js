/**
 * Grid Utilities
 * Helper functions for Bento Grid layout calculations and optimization
 */

/**
 * Calculate grid span values based on gridSize and breakpoint
 * @param {Object} gridSize - { rows: 1|2, cols: 1|2 }
 * @param {string} breakpoint - 'mobile' | 'tablet' | 'desktop'
 * @returns {Object} { gridRowSpan, gridColumnSpan }
 */
export const calculateGridSpan = (gridSize, breakpoint = 'desktop') => {
  // On mobile, everything is 1x1
  if (breakpoint === 'mobile') {
    return { gridRowSpan: 1, gridColumnSpan: 1 };
  }

  // On tablet, featured projects become 2x1
  if (breakpoint === 'tablet') {
    return {
      gridRowSpan: gridSize.rows > 1 ? 1 : 1,
      gridColumnSpan: gridSize.cols > 1 ? 2 : 1,
    };
  }

  // Desktop: full gridSize
  return {
    gridRowSpan: gridSize.rows,
    gridColumnSpan: gridSize.cols,
  };
};

/**
 * Determine responsive column count based on window width
 * @param {number} width - Window width in pixels
 * @returns {number} Column count (1, 2, or 3)
 */
export const getResponsiveColumns = (width) => {
  if (width < 640) return 1; // Mobile
  if (width < 1024) return 2; // Tablet
  return 3; // Desktop
};

/**
 * Get breakpoint name from window width
 * @param {number} width - Window width in pixels
 * @returns {string} 'mobile' | 'tablet' | 'desktop'
 */
export const getBreakpoint = (width) => {
  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

/**
 * Optimize grid layout to minimize gaps (Tetris-style packing)
 * Sorts projects to maximize visual balance
 * @param {Array} projects - Array of project objects
 * @returns {Array} Optimized project array
 */
export const optimizeGridLayout = (projects) => {
  if (projects.length === 0) return projects;

  // Sort by: featured first, then by grid size (larger first), then by order
  const sorted = [...projects].sort((a, b) => {
    // Featured projects first
    if (a.featured !== b.featured) {
      return b.featured ? 1 : -1;
    }

    // Larger grid sizes first (to fill space efficiently)
    const aSizeScore = (a.gridSize.rows * a.gridSize.cols);
    const bSizeScore = (b.gridSize.rows * b.gridSize.cols);
    if (aSizeScore !== bSizeScore) {
      return bSizeScore - aSizeScore;
    }

    // Maintain original order
    return projects.indexOf(a) - projects.indexOf(b);
  });

  return sorted;
};

/**
 * Get CSS class name(s) for card sizing
 * @param {Object} gridSize - { rows: 1|2, cols: 1|2 }
 * @returns {string} CSS class name
 */
export const getCardClassName = (gridSize) => {
  const rowSpan = gridSize.rows;
  const colSpan = gridSize.cols;

  if (rowSpan === 2 && colSpan === 2) return 'sizeLarge';
  if (rowSpan === 1 && colSpan === 2) return 'sizeWide';
  if (rowSpan === 2 && colSpan === 1) return 'sizeTall';
  return 'sizeSmall';
};

/**
 * Calculate grid template columns string for responsive layout
 * @param {number} columns - Number of columns (1, 2, or 3)
 * @returns {string} CSS Grid template-columns value
 */
export const getGridTemplateColumns = (columns) => {
  const minWidth = 300; // Minimum card width
  return `repeat(${columns}, minmax(${minWidth}px, 1fr))`;
};

/**
 * Filter projects for empty state
 * @param {Array} projects - Array of projects
 * @returns {boolean} True if projects array is empty
 */
export const hasNoProjects = (projects) => {
  return !projects || projects.length === 0;
};

/**
 * Calculate card grid positions to avoid overlaps
 * @param {Array} projects - Array of project objects with gridSize
 * @param {number} columnCount - Number of columns in grid
 * @returns {Array} Projects with calculated row/col start positions
 */
export const calculateCardPositions = (projects, columnCount) => {
  const grid = {};
  let currentRow = 1;
  let currentCol = 1;

  return projects.map((project) => {
    // Find next available position
    while (grid[`${currentRow}-${currentCol}`]) {
      currentCol++;
      if (currentCol > columnCount) {
        currentCol = 1;
        currentRow++;
      }
    }

    // Mark grid cells as occupied
    for (let r = 0; r < project.gridSize.rows; r++) {
      for (let c = 0; c < project.gridSize.cols; c++) {
        grid[`${currentRow + r}-${currentCol + c}`] = true;
      }
    }

    return {
      ...project,
      gridRowStart: currentRow,
      gridColumnStart: currentCol,
    };
  });
};
