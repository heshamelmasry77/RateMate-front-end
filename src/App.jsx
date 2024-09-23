import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import RegisterPage from "./pages/RegisterPage";
import CheckCurrencyHistory from "./pages/CheckCurrencyHistory";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

function App() {
  return (
    <div className={"container mx-auto"}>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signin"
            element={<UnauthenticatedRoute element={<SignInPage />} />}
          />
          <Route
            path="/register"
            element={<UnauthenticatedRoute element={<RegisterPage />} />}
          />
          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <CheckCurrencyHistory />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
