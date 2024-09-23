const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const FIXER_API_BASE_URL = import.meta.env.VITE_FIXER_API_BASE_URL;
const API_KEY = import.meta.env.VITE_FIXER_API_KEY;

// Function to fetch list of available currencies
export const getAvailableCurrencies = async () => {
  const response = await fetch(
    `${FIXER_API_BASE_URL}/symbols?access_key=${API_KEY}`
  );
  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error("Failed to fetch currencies");
  }

  return data.symbols; // Returns an object of currency symbols
};

// Function to convert currency
export const convertCurrency = async (from, to, amount) => {
  const response = await fetch(`${API_BASE_URL}/convert`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      from: from.toUpperCase(),
      to: to.toUpperCase(),
      amount,
    }),
  });

  const data = await response.json();

  if (
    response.status === 401 ||
    (data.errors && data.errors.includes("Please log in"))
  ) {
    // Return an indication that the user is not authorized
    return { message: "Unauthorized" };
  }

  if (!response.ok) {
    throw new Error(
      data.error || data.errors
        ? data.error || data.errors
        : "Failed to convert currency"
    );
  }

  return data;
};
