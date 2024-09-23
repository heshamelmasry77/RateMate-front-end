import { createSlice } from "@reduxjs/toolkit";
import { convertCurrency } from "../services/currencyService";

const initialState = {
  from: "",
  to: "",
  amount: 0,
  convertedAmount: null,
  exchangeRate: null,
  error: null,
  loading: false,
};

const conversionSlice = createSlice({
  name: "conversion",
  initialState,
  reducers: {
    startConversion: (state) => {
      state.loading = true;
      state.error = null;
    },
    conversionSuccess: (state, action) => {
      state.loading = false;
      state.convertedAmount = action.payload.converted_amount;
      state.exchangeRate = action.payload.exchange_rate;
    },
    conversionFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetConversion: (state) => {
      state.convertedAmount = null;
      state.exchangeRate = null;
    },
  },
});

export const {
  startConversion,
  conversionSuccess,
  conversionFailed,
  resetConversion,
} = conversionSlice.actions;

export const convert = (from, to, amount) => async (dispatch) => {
  try {
    dispatch(startConversion());
    const data = await convertCurrency(from, to, amount);

    if (data.message === "Unauthorized") {
      dispatch(conversionFailed("Unauthorized"));
      return; // Return early to avoid continuing with success flow
    }

    dispatch(conversionSuccess(data));
  } catch (error) {
    console.log("error slice", error);
    dispatch(conversionFailed(error.message));
  }
};

export default conversionSlice.reducer;
