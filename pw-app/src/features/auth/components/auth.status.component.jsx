import { useEffect } from "react";
import { useAuth } from "../stores/auth.hooks";
import { useUser } from "../../user/stores/user.hooks";
import { useNavigate } from "react-router";
import { SIGN_IN } from "../../../constants/routes";
import { Button } from "@mui/material";

export const AuthStatus = () => {
    let navigate = useNavigate();
    let  { accessToken, signout } = useAuth();
    let  { currentUser, loadCurrentUser, isLoading } = useUser();
    
    useEffect(() => {
        if (!isLoading && !currentUser)
        {
            loadCurrentUser();
        }
    });

        if (!!accessToken)
            return (
            <div className="user-info">
                <h4 className="mb-3">
                    {currentUser?.name} your balance {currentUser?.balance.toFixed(2)}
                </h4>
                <Button className="mb-3" onClick={() => signout() }>Sign out</Button>
            </div>
            );
        else
        {
            return (
            <div className="user-info">
                <h4 className="mb-3">
                    You are not authorized
                </h4>
                <Button onClick={() => navigate(SIGN_IN) }>Sign in</Button>
            </div>);
        }
}
