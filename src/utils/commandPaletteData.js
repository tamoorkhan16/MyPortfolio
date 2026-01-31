/**
 * Command Palette Data
 *
 * Centralized command and navigation items for the command palette.
 * Easily extensible for adding new commands and features.
 *
 * Structure:
 * - id: Unique identifier
 * - label: Display text
 * - description: Optional subtitle
 * - icon: Optional emoji or icon identifier
 * - action: Navigation target or callback
 * - type: Category ('navigation', 'theme', 'action')
 * - keywords: Array of searchable terms for fuzzy matching
 */

/**
 * Navigation Commands
 * Links to main portfolio sections
 */
const navigationCommands = [
  {
    id: 'nav-home',
    label: 'Home',
    description: 'Return to home section',
    icon: '🏠',
    action: '#home',
    type: 'navigation',
    keywords: ['home', 'top', 'start', 'hero'],
  },
  {
    id: 'nav-projects',
    label: 'Projects',
    description: 'View portfolio projects',
    icon: '💼',
    action: '#projects',
    type: 'navigation',
    keywords: ['projects', 'portfolio', 'work', 'portfolio'],
  },
  {
    id: 'nav-skills',
    label: 'Skills',
    description: 'Technical skills and expertise',
    icon: '⚡',
    action: '#skills',
    type: 'navigation',
    keywords: ['skills', 'expertise', 'technologies', 'tech'],
  },
  {
    id: 'nav-skills-search',
    label: 'Search Skills',
    description: 'Find and explore specific skills',
    icon: '🔍',
    action: '#skills',
    type: 'navigation',
    keywords: ['search', 'skills', 'find', 'lookup'],
  },
  {
    id: 'nav-resume',
    label: 'Resume',
    description: 'Download or view resume',
    icon: '📄',
    action: '#resume',
    type: 'navigation',
    keywords: ['resume', 'cv', 'experience', 'download'],
  },
  {
    id: 'nav-contact',
    label: 'Contact',
    description: 'Get in touch',
    icon: '📧',
    action: '#contact',
    type: 'navigation',
    keywords: ['contact', 'email', 'reach', 'message'],
  },
];

/**
 * Theme Commands
 * Control application theme
 */
const themeCommands = [
  {
    id: 'theme-light',
    label: 'Light Theme',
    description: 'Switch to light mode',
    icon: '☀️',
    action: 'light',
    type: 'theme',
    keywords: ['light', 'theme', 'mode', 'bright'],
  },
  {
    id: 'theme-dark',
    label: 'Dark Theme',
    description: 'Switch to dark mode',
    icon: '🌙',
    action: 'dark',
    type: 'theme',
    keywords: ['dark', 'theme', 'mode', 'night'],
  },
  {
    id: 'theme-custom',
    label: 'Custom Theme',
    description: 'Switch to custom theme',
    icon: '✨',
    action: 'custom',
    type: 'theme',
    keywords: ['custom', 'theme', 'special', 'unique'],
  },
];

/**
 * Action Commands
 * Miscellaneous actions and utilities
 */
const actionCommands = [
  {
    id: 'action-github',
    label: 'Open GitHub',
    description: 'Visit GitHub profile',
    icon: '🐙',
    action: () => {
      window.open('https://github.com', '_blank');
    },
    type: 'action',
    keywords: ['github', 'profile', 'code', 'repository'],
  },
  {
    id: 'action-email',
    label: 'Copy Email',
    description: 'Copy email address to clipboard',
    icon: '📋',
    action: () => {
      navigator.clipboard.writeText('contact@example.com');
    },
    type: 'action',
    keywords: ['email', 'copy', 'contact', 'address'],
  },
  {
    id: 'action-toggle-shortcuts',
    label: 'Show Shortcuts',
    description: 'Display keyboard shortcuts',
    icon: '⌨️',
    action: () => {
      console.log('Show shortcuts');
    },
    type: 'action',
    keywords: ['shortcuts', 'keyboard', 'keys', 'help'],
  },
];

/**
 * Combined array of all commands
 * Used for searching and filtering
 */
export const COMMAND_ITEMS = [
  ...navigationCommands,
  ...themeCommands,
  ...actionCommands,
];

/**
 * Get commands by type
 *
 * @param {string} type - Command type to filter
 * @returns {Array<Object>} Commands of specified type
 */
export const getCommandsByType = (type) => {
  return COMMAND_ITEMS.filter((command) => command.type === type);
};

/**
 * Get all command items grouped by type
 *
 * @returns {Object} Commands grouped by type
 */
export const getCommandsGroupedByType = () => {
  return {
    navigation: getCommandsByType('navigation'),
    theme: getCommandsByType('theme'),
    action: getCommandsByType('action'),
  };
};

export default {
  COMMAND_ITEMS,
  getCommandsByType,
  getCommandsGroupedByType,
};
