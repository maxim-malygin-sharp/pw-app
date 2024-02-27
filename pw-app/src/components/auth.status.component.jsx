import { Component, useEffect } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../actions/user.actions";
import { useAuth } from "../stores/auth.hooks";
import { useUser } from "../stores/user.hooks";

export const AuthStatus = () => {
    let  { accessToken, signout, doSignin } = useAuth();
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
            <div>
                <h4 className="mb-3">
                    {currentUser?.name} <br /> balance {currentUser?.balance.toFixed(2)}
                </h4>
                <button onClick={() => signout() }>Sign out</button>
            </div>
            );
        else
        {
            return (
            <div>
                <h4 className="mb-3">
                    You are not authorized
                </h4>
                <button onClick={() => doSignin() }>Sign in</button>
            </div>);
        }
}
