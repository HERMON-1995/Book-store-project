import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    checkStatus: () => {
      const statusBtn = document.querySelector('.primary-button-big');
      if (statusBtn) {
        statusBtn.style.display = 'none';
      }
      return 'Under Construction.';
    },
  },
});

export const { checkStatus } = categorySlice.actions;

export default categorySlice.reducer;
