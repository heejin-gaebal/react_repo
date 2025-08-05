import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    //리듀서 만들어서 store에 저장
  },
});

export default store;
