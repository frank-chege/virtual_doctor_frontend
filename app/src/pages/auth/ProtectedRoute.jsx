import { useGlobalContext } from "./GlobalContext";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  //access global context
  const { authStatus, setAuthStatus } = useGlobalContext();

  return (
    <Route>
      render ={" "}
      {(props) =>
        authStatus && Component ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    </Route>
  );
}
export default ProtectedRoute;
