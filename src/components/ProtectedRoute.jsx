import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

/* eslint-disable */
function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return children;
}

export default ProtectedRoute;
