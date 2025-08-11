import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { cnt: 0 },
  reducers: {
    //인자값으로 state, action을 전달받음
    plusOne: (state, action) => {
      state.cnt = state.cnt + 1;
    },
    minusOne: (state, action) => {
      state.cnt = state.cnt - 1;
    },

    //값을 받아서 더하고 빼기
    plus: (state, action) => {
      // state.cnt = 기존값 + 함수 호출 시 전달받은 값
      state.cnt = state.cnt + action.payload;
    },
    minus: (state, action) => {
      state.cnt = state.cnt - action.payload;
    },
  },
});

//함수들도 내보내기
export const { plusOne, minusOne, plus, minus } = counterSlice.actions;
export default counterSlice.reducer;
/**createSlice 만드는 이유
 * 다른데서도 이 슬라이스의 plusOne,minusOne,plus,minus 함수들을 사용하라고~
 */
