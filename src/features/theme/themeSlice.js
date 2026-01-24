import { createSlice } from '@reduxjs/toolkit';

const THEME_STORAGE_KEY = 'portfolio-theme';
const SYSTEM_PREFERENCE_STORAGE_KEY = 'portfolio-use-system-theme';
const VALID_THEMES = ['light', 'dark', 'custom'];

const getSystemPreference = () => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';

  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const useSystemTheme = localStorage.getItem(SYSTEM_PREFERENCE_STORAGE_KEY) !== 'false';

  if (savedTheme && !useSystemTheme) {
    return savedTheme;
  }

  return getSystemPreference();
};

const initialState = {
  mode: getInitialTheme(),
  systemPreference: getSystemPreference(),
  useSystemPreference: localStorage.getItem(SYSTEM_PREFERENCE_STORAGE_KEY) !== 'false',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    initializeTheme: (state) => {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      const useSystemTheme = localStorage.getItem(SYSTEM_PREFERENCE_STORAGE_KEY) !== 'false';

      state.useSystemPreference = useSystemTheme;
      state.systemPreference = getSystemPreference();

      if (useSystemTheme) {
        state.mode = state.systemPreference;
      } else if (savedTheme) {
        state.mode = savedTheme;
      } else {
        state.mode = 'light';
      }
    },
    setTheme: (state, action) => {
      if (VALID_THEMES.includes(action.payload)) {
        state.mode = action.payload;
        state.useSystemPreference = false;
        localStorage.setItem(THEME_STORAGE_KEY, action.payload);
        localStorage.setItem(SYSTEM_PREFERENCE_STORAGE_KEY, 'false');
      }
    },
    toggleTheme: (state) => {
      const themeSequence = ['light', 'dark', 'custom'];
      const currentIndex = themeSequence.indexOf(state.mode);
      const nextIndex = (currentIndex + 1) % themeSequence.length;
      state.mode = themeSequence[nextIndex];
      state.useSystemPreference = false;
      localStorage.setItem(THEME_STORAGE_KEY, state.mode);
      localStorage.setItem(SYSTEM_PREFERENCE_STORAGE_KEY, 'false');
    },
    setSystemPreference: (state, action) => {
      state.systemPreference = action.payload;
      if (state.useSystemPreference) {
        state.mode = action.payload;
      }
    },
    toggleUseSystemPreference: (state) => {
      state.useSystemPreference = !state.useSystemPreference;
      localStorage.setItem(SYSTEM_PREFERENCE_STORAGE_KEY, String(state.useSystemPreference));

      if (state.useSystemPreference) {
        state.mode = state.systemPreference;
      }
    },
  },
});

export const {
  initializeTheme,
  setTheme,
  toggleTheme,
  setSystemPreference,
  toggleUseSystemPreference,
} = themeSlice.actions;

export const selectTheme = (state) => state.theme.mode;
export const selectThemeMode = (state) => state.theme.mode;
export const selectUseSystemPreference = (state) => state.theme.useSystemPreference;
export const selectSystemPreference = (state) => state.theme.systemPreference;

export default themeSlice.reducer;
