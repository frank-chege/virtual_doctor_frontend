import { useGlobalContext } from "./GlobalContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  //access global context
  const { authStatus, setAuthStatus } = useGlobalContext();

  return authStatus && children ? children : <Navigate to="/login" />;
}
export default ProtectedRoute;
