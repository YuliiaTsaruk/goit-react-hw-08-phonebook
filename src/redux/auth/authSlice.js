import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  isLoggedin: false,
  token: '',
  isRefreshing: false,
  isError: false,
};

export const authSlice = createSlice({
  name: 'authorization',
  initialState,

  reducers: {
    resetError: state => {
      state.isError = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { resetError } = authSlice.actions;
