import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../stores/auth.hooks";
import { SIGN_IN } from '../../../constants/routes';

export function RequireAuth({ children }) {
    let location = useLocation();
    let { accessToken } = useAuth()

    if (!accessToken) {
      return <Navigate to={SIGN_IN} state={{ from: location }} replace />;
    }
  
    return children;
  }
  