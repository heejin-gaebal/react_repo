import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
  name: 'board',
  initialState: { voList: [] },
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    boardList: (state, action) => {
      state.voList = action.payload;
    },
  },
});

//boardSlice.reducer 는 store에서 사용
export const { boardList } = boardSlice.actions;
export default boardSlice.reducer;
