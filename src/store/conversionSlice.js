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
  },
});

export const { startConversion, conversionSuccess, conversionFailed } =
  conversionSlice.actions;

export const convert = (from, to, amount) => async (dispatch) => {
  try {
    dispatch(startConversion());
    const data = await convertCurrency(from, to, amount);
    dispatch(conversionSuccess(data));
  } catch (error) {
    dispatch(conversionFailed(error.message));
  }
};

export default conversionSlice.reducer;
