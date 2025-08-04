import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';

const store = configureStore({
  // reducer 여러개 넣어줄 것
  reducer: {
    // 키 : 값,
    counter: counterReducer,
  },
});

export default store;
