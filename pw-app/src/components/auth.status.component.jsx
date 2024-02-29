import { useEffect } from "react";
import { useAuth } from "../stores/auth.hooks";
import { useUser } from "../stores/user.hooks";
import { useNavigate } from "react-router";
import { SIGN_IN } from "../constants/routes";

export const AuthStatus = () => {
    let navigate = useNavigate();
    let  { accessToken, signout } = useAuth();
    let  { currentUser, loadCurrentUser, isLoading } = useUser();
    
    debugger;
    useEffect(() => {
        if (!isLoading && !currentUser)
        {
            debugger;
            loadCurrentUser();
        }
    });

        if (!!accessToken)
            return (
            <div className="user-info">
                <h4 className="mb-3">
                    {currentUser?.name} your balance {currentUser?.balance.toFixed(2)}
                </h4>
                <button onClick={() => signout() }>Sign out</button>
            </div>
            );
        else
        {
            return (
            <div className="user-info">
                <h4 className="mb-3">
                    You are not authorized
                </h4>
                <button onClick={() => navigate(SIGN_IN) }>Sign in</button>
            </div>);
        }
}
