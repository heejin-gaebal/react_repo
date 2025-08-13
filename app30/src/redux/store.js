import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import navReducer from './navSlice';
import memberReducer from './memberSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    nav: navReducer,
    member: memberReducer,
  },
});

export default store;
