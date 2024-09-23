import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { convert } from "../store/conversionSlice";

const CurrencyConverter = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();
  const { convertedAmount, exchangeRate, loading, error } = useSelector(
    (state) => state.conversion
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(convert(from, to, amount));
  };

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="from">From Currency:</label>
          <input
            id="from"
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="to">To Currency:</label>
          <input
            id="to"
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
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
