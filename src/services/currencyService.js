const API_BASE_URL = "http://localhost:3000/api/v1";

export const convertCurrency = async (from, to, amount) => {
  // Ensure currency codes are uppercase
  const fromCurrency = from.toUpperCase();
  const toCurrency = to.toUpperCase();

  const response = await fetch(`${API_BASE_URL}/convert`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Using token as it's a protected route and requires authentication
    },
    body: JSON.stringify({
      from: fromCurrency,
      to: toCurrency,
      amount,
    }),
  });

  const data = await response.json(); // Await the resolution of the JSON promise

  if (!response.ok) {
    throw new Error(data.error ? data.error : "Failed to convert currency");
  }

  return data; // Return the resolved data, which contains converted amount and exchange rate
};
