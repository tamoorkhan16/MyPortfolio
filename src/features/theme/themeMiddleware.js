import { setTheme, toggleUseSystemPreference } from './themeSlice';

export const themeMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // Persist theme to localStorage when it changes
  if (action.type === setTheme.type) {
    localStorage.setItem('portfolio-theme', action.payload);
  }

  // Persist system preference toggle to localStorage
  if (action.type === toggleUseSystemPreference.type) {
    const state = store.getState();
    localStorage.setItem(
      'portfolio-use-system-theme',
      String(state.theme.useSystemPreference),
    );
  }

  return result;
};
