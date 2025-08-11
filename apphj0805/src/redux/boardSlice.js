import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
  name: 'board',
  initialState: {
    title: '',
    content: '',
  },
  reducers: {
    boardInsert: (state, action) => {
      state.title = action.payload.title;
      state.content = action.payload.content;
    },
  },
  //reducers 기능들에 대한 리모콘
  //객체를 열때 항상 K:V
  //<state (값), action(setter처럼 쓰는 애-하지만 폐쇄적 [get,post 관계])>
});

export const { boardInsert } = boardSlice.actions;
export default boardSlice.reducer;
