import { createSlice } from '@reduxjs/toolkit';

const memberSlice = createSlice({
  name: 'member',
  initialState: {
    loginMember: {},
  },
  reducers: {
    //member에서 사용할 리듀서 함수
    login: (state, action) => {
      state.loginMember = action.payload;
    },
    logout: (state, action) => {
      state.loginMember = {};
    },
  },
});

export const { login, logout } = memberSlice.actions;
export default memberSlice.reducer;
