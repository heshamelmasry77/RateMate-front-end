import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js"; // Import the slice from store folder

const store = configureStore({
  reducer: {
    auth: authSlice, // RegisterPage the counter reducer
  },
});

export default store;
