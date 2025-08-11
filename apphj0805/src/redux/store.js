import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './boardSlice';

// store 길잡이역할
const store = configureStore({
  reducer: {
    board: boardReducer,
  },
});

export default store;
