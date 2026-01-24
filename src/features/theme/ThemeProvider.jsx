import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { themes } from '@styles/tokens';

import {
  initializeTheme,
  selectThemeMode,
  selectUseSystemPreference,
  setSystemPreference,
  setTheme,
} from './themeSlice';

const DEFAULT_THEME = 'light';

export function ThemeProvider({ children }) {
  const dispatch = useDispatch();
  const themeMode = useSelector(selectThemeMode);
  const useSystemPreference = useSelector(selectUseSystemPreference);

  // Initialize theme on mount
  useEffect(() => {
    dispatch(initializeTheme());
  }, [dispatch]);

  // Apply theme tokens to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Validate theme mode and fall back to default if invalid
    const validTheme = themes[themeMode] ? themeMode : DEFAULT_THEME;
    
    // Self-heal: if theme mode is invalid, dispatch setTheme to update state
    if (validTheme !== themeMode) {
      dispatch(setTheme(validTheme));
      return; // Exit early and let the effect run again with valid theme
    }

    const themeTokens = themes[validTheme];

    // Add transition class
    root.classList.add('theme-transitioning');

    // Inject CSS custom properties
    Object.entries(themeTokens).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });

    // Set data-theme attribute for CSS targeting
    root.setAttribute('data-theme', validTheme);

    // Remove transition class after animation completes
    const timer = setTimeout(() => {
      root.classList.remove('theme-transitioning');
    }, 300);

    return () => clearTimeout(timer);
  }, [themeMode, dispatch]);

  // Setup system preference detection
  useEffect(() => {
    if (!useSystemPreference) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      dispatch(setSystemPreference(e.matches ? 'dark' : 'light'));
    };

    // Modern browsers
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [useSystemPreference, dispatch]);

  return children;
}
