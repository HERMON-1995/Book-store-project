import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    checkStatus: () => 'Under Construction.',
  },
});

export const { checkStatus } = categorySlice.actions;

export default categorySlice.reducer;
