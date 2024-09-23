import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

/* eslint-disable */
function UnauthenticatedRoute({ element }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <Navigate to="/" /> : element;
}

export default UnauthenticatedRoute;
