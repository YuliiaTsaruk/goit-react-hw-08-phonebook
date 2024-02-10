import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refresh, register } from './authOperations';

export const authSlice = createSlice({
  name: 'authorization',
  initialState: {
    user: { name: null, email: null },
    isLoggedIn: false,
    token: '',
    isRefreshing: false,
    isError: false,
  },

  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isError = false;
      })
      .addCase(register.rejected, state => {
        state.isLoggedIn = false;
        state.isError = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isError = false;
      })
      .addCase(logIn.rejected, state => {
        state.isLoggedIn = false;
        state.isError = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isError = false;
      })
      .addCase(logOut.rejected, state => {
        state.isLoggedIn = true;
        state.isError = true;
      })

      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.isError = false;
      })
      .addCase(refresh.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.isError = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { resetError } = authSlice.actions;
