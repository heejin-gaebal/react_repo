import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
  name: 'board',
  initialState: { voList: [] }, //객체안에 배열로 담기
  reducers: {
    // add: (state, action) => {//기존 배열에 추가하는 함수
    //   state.push(action.payload); //vo가 담긴 액션의 payload를 담아온다
    // },
    setVoList: (state, action) => {
      state.voList = action.payload; //vo가 담긴 액션의 payload를 담아온다
      console.log(state.voList);
    },
  },
});

// export const x = boardSlice.actions.add; //dispatch를 통해 add 함수 전달
export const { setVoList } = boardSlice.actions; //dispatch를 통해 add 함수 전달 {구조분해 할당 형식}
export default boardSlice.reducer;

//store에서 쓸거임
