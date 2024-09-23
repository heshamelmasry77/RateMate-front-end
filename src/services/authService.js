const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const signIn = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json(); // Await the resolution of the JSON promise

  if (!response.ok) {
    // If the response is not ok, throw the actual error messages from the response
    throw new Error(data.errors ? data.errors.join(", ") : "Failed to sign in");
  }

  console.log("response json", data); // Log the actual data

  return data; // Return the resolved data, which contains JWT token and other user info
};

export const signUp = async (username, email, password) => {
  console.log("username", username);
  console.log("email", email);
  console.log("password", password);

  const response = await fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user: {
        username,
        email,
        password,
      },
    }),
  });

  const data = await response.json(); // Await the resolution of the JSON promise

  if (!response.ok) {
    // If the response is not ok, throw the actual error messages from the response
    throw new Error(data.errors ? data.errors.join(", ") : "Failed to sign up");
  }

  console.log("response json sign up", data); // Log the actual data

  return data; // Return the resolved data, which contains JWT token and other user info
};
