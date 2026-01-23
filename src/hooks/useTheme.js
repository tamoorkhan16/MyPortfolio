import { useSelector, useDispatch } from 'react-redux';

import {
  selectThemeMode,
  selectUseSystemPreference,
  setTheme,
  toggleTheme,
  toggleUseSystemPreference,
} from '@features/theme/themeSlice';

export function useTheme() {
  const dispatch = useDispatch();
  const theme = useSelector(selectThemeMode);
  const useSystemPreference = useSelector(selectUseSystemPreference);

  return {
    theme,
    setTheme: (mode) => dispatch(setTheme(mode)),
    toggleTheme: () => dispatch(toggleTheme()),
    useSystemPreference,
    toggleUseSystemPreference: () => dispatch(toggleUseSystemPreference()),
  };
}
