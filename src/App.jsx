import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import CheckCurrencyHistory from "./pages/CheckCurrencyHistory";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/history" element={<CheckCurrencyHistory />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
