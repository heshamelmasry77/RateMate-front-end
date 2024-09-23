// src/store/toastSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  isVisible: false,
  bgColor: "bg-green-500", // Default color
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.message = action.payload.message;
      state.bgColor = action.payload.bgColor || "bg-green-500"; // Default to green if no color is provided
      state.isVisible = true;
    },
    hideToast: (state) => {
      state.isVisible = false;
      state.message = "";
      state.bgColor = "bg-green-500"; // Reset to default color
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
