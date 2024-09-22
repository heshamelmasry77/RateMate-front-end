import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // Import the slice from store folder

const store = configureStore({
  reducer: {
    counter: counterReducer, // Register the counter reducer
  },
});

export default store;
