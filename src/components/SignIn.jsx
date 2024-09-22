import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../services/authService";
import { signInSuccess, authFailed } from "../store/authSlice";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("email", email);
      console.log("password", password);
      const data = await signIn(email, password);
      console.log(data);
      dispatch(signInSuccess(data)); // Assuming the response includes token and user
    } catch (error) {
      dispatch(authFailed(error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignIn;
