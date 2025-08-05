import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './boardSlice';

const store = configureStore({
  //reducer가 여러개 들어갈것이므로 객체형식으로 받기
  reducer: {
    board: boardReducer,
  },
});

export default store;
