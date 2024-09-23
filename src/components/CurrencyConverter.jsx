import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { convert, resetConversion } from "../store/conversionSlice";
import { getAvailableCurrencies } from "../services/currencyService";
import CurrencyDropdown from "./CurrencyDropdown";
import { signOut } from "../store/authSlice.js";

const CurrencyConverter = () => {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EGP");
  const [amount, setAmount] = useState("");
  const [currencies, setCurrencies] = useState([]);
  const [showResult, setShowResult] = useState(false); // State to control result visibility

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { convertedAmount, exchangeRate, loading, error } = useSelector(
    (state) => state.conversion
  );

  // Fetch available currencies when component mounts
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const currencyList = await getAvailableCurrencies();
        setCurrencies(Object.keys(currencyList));
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchCurrencies().then((r) => r);
  }, []);

  // Reset showResult when the amount changes
  useEffect(() => {
    setShowResult(false); // Hide result when the amount changes
  }, [amount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetConversion()); // Reset previous result
    dispatch(convert(from, to, amount));
    setShowResult(true); // Show result after conversion
  };

  useEffect(() => {
    // If the error indicates unauthorized, redirect to login
    if (error === "Unauthorized") {
      dispatch(signOut());
      navigate("/signin");
    }
  }, [error, navigate, dispatch]);

  return (
    <div className="currency-converter min-w-96 rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-6 text-center text-3xl font-bold text-indigo-600">
        Currency Converter
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start justify-start gap-6"
      >
        <div className="relative w-full">
          <label
            htmlFor="from"
            className="mb-2 block text-lg font-medium text-gray-700"
          >
            From Currency:
          </label>
          <CurrencyDropdown
            currencies={currencies}
            selectedCurrency={from}
            setSelectedCurrency={setFrom}
          />
        </div>
        <div className="relative w-full">
          <label
            htmlFor="to"
            className="mb-2 block text-lg font-medium text-gray-700"
          >
            To Currency:
          </label>
          <CurrencyDropdown
            currencies={currencies}
            selectedCurrency={to}
            setSelectedCurrency={setTo}
          />
        </div>
        <div className="relative w-full">
          <label
            htmlFor="amount"
            className="mb-2 block text-lg font-medium text-gray-700"
          >
            Amount:
          </label>
          <div className="mt-2">
            <input
              id="amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {loading ? "Converting..." : "Convert"}
        </button>
      </form>

      {error && <p className="mt-4 text-center text-red-500">Error: {error}</p>}

      {showResult && convertedAmount && (
        <div className="mt-6 text-center">
          <p className="break-all text-lg font-medium text-gray-900">
            <span className={"text-orange-500"}>{amount}</span> {from} is
            equivalent to{" "}
            <span className={"text-orange-500"}>{convertedAmount}</span> {to}
          </p>
          <p className="break-all text-sm text-gray-500">
            Exchange Rate: {exchangeRate}
          </p>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
