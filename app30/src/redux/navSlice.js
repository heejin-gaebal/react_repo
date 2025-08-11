import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'nav',
  initialState: { itemName: 'none' },
  reducers: {
    selectBoard: (state, action) => {
      state.itemName = 'board';
    },
    selectNotice: (state, action) => {
      state.itemName = 'notice';
    },
    selectGallery: (state, action) => {
      state.itemName = 'gallery';
    },
  },
});

export const { selectBoard, selectNotice, selectGallery } = navSlice.actions;
export default navSlice.reducer;
