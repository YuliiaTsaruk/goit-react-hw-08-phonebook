import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'authorization',
  initialState: {
    user: { name: null, email: null },
    isLoggedin: false,
    token: '',
    isRefreshing: false,
    isError: false,
  },

  reducers: {
    resetError: state => {
      state.isError = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { resetError } = authSlice.actions;
