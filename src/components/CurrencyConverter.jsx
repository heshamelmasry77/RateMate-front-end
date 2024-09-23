import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { convert } from "../store/conversionSlice";
import { getAvailableCurrencies } from "../services/currencyService";
import CurrencyDropdown from "./CurrencyDropdown";

const CurrencyConverter = () => {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EGP");
  const [amount, setAmount] = useState("");
  const [currencies, setCurrencies] = useState([]);

  const dispatch = useDispatch();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(convert(from, to, amount));
  };

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
      {convertedAmount && (
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
