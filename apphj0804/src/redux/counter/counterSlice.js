import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  //reducer, initialState 셋팅하기
  //reducer의 name
  name: 'counter',
  initialState: { cnt: 0 },
  //reducer의 함수 주머니 => switch로 반복되는 코드를 정리
  reducers: {
    plus: (state, action) => {
      state.cnt += 1;
    },
    minus: (state, action) => {
      state.cnt -= 1;
    },
  },
});

export const { plus, minus } = counterSlice.actions; //객체 꺼내서 보내기
export default counterSlice.reducer; //counterSlice안에 담긴 리듀서를 내보내기
