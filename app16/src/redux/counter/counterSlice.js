import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  //reducer, initialState 셋팅하기
  name: 'counter',
  initialState: { cnt: 0 },
  reducers: {
    plus: (state, action) => {
      state.cnt += 1;
    },
    minus: (state, action) => {
      state.cnt -= 1;
    },
  },
  //switch로 반복되는 코드를 정리
});

export const { plus, minus } = counterSlice.actions; //객체 꺼내서 보내기
export default counterSlice.reducer;
