import { createSlice } from "@reduxjs/toolkit";

// Get the token from local storage (if available)
const initialToken = localStorage.getItem("token");

const initialState = {
  token: initialToken,
  user: null,
  isAuthenticated: initialToken ? true : false, // check if token exists, authenticated is true
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      console.log("action.payload", action.payload);
      state.token = action.payload.jwt; // Expecting 'jwt' in the payload
      state.user = action.payload.user;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.jwt); // Store the JWT in local storage
    },
    signUpSuccess: (state, action) => {
      state.token = action.payload.jwt; // Expecting 'jwt' in the payload
      state.user = action.payload.user;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.jwt); // Store the JWT in local storage
    },
    signOut: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token"); // Clear token from local storage on sign out
    },
    authFailed: (state, action) => {
      state.error = action.payload; // Capture and display the error
    },
  },
});

export const { signInSuccess, signUpSuccess, signOut, authFailed } =
  authSlice.actions;

export default authSlice.reducer;
