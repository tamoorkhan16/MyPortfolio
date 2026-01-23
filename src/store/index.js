import { configureStore } from '@reduxjs/toolkit';

import { themeMiddleware } from '@features/theme/themeMiddleware';
import themeReducer from '@features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // For Framer Motion animation states
    }).concat(themeMiddleware),
});
