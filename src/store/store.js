import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js"; // Import the slice from store folder
import conversionSlice from "./conversionSlice.js"; // Import the slice from store folder

const store = configureStore({
  reducer: {
    auth: authSlice,
    conversion: conversionSlice,
  },
});

export default store;
