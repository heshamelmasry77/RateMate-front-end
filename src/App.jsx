import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import CheckCurrencyHistory from "./pages/CheckCurrencyHistory";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/history" element={<CheckCurrencyHistory />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
