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
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <form
        onSubmit={handleSubmit}
        className={"flex flex-col items-start justify-start gap-4"}
      >
        <div className={"relative"}>
          <label htmlFor="from">From Currency:</label>
          <CurrencyDropdown
            currencies={currencies}
            selectedCurrency={from}
            setSelectedCurrency={setFrom}
          />
        </div>
        <div className={"relative"}>
          <label htmlFor="to">To Currency:</label>
          <CurrencyDropdown
            currencies={currencies}
            selectedCurrency={to}
            setSelectedCurrency={setTo}
          />
        </div>
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Amount:
          </label>
          <div className="mt-2">
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {loading ? "Converting..." : "Convert"}
        </button>
      </form>

      {error && <p>Error: {error}</p>}

      {showResult && convertedAmount && (
        <div>
          <p>
            {amount} {from} is equivalent to {convertedAmount} {to}
          </p>
          <p>Exchange Rate: {exchangeRate}</p>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
