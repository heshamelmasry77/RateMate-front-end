import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      console.log("action.payload", action.payload);
      state.token = action.payload.jwt;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.jwt);
    },
    signUpSuccess: (state, action) => {
      state.token = action.payload.jwt;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.jwt);
    },
    signOut: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
    authFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { signInSuccess, signUpSuccess, signOut, authFailed } =
  authSlice.actions;
export default authSlice.reducer;
