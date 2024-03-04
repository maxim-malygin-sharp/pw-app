import { useLocation, Navigate } from "react-router-dom";
import { HOME } from "../../../constants/routes";
import { useAuth } from "../stores/auth.hooks";


export function NoAuth({ children }) {
  let location = useLocation();
  let { accessToken } = useAuth();

  if (!!accessToken) {
    return <Navigate to={HOME} state={{ from: location }} replace />;
  }

  return children;
}
