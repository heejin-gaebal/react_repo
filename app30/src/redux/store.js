import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import navReducer from './navSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    nav: navReducer,
  },
});

export default store;
