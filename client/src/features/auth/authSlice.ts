// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false // for monitoring the registration process.
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase('auth/login/pending', (state) => {
        state.loading = true;
      })
      .addCase('auth/login/fulfilled', (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload.user;
        state.userToken = payload.token;
        state.success = true;
      })
      .addCase('auth/login/rejected', (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = false;
      });
  }
});

export const { reducer: authReducer } = authSlice;
export const authActions = authSlice.actions;
