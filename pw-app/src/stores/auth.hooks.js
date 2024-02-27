import { appSelector, useAppDipatch, useAppActions } from "./hooks";
import * as authStore from './auth.store';

export const useAuth = () => {
    const { isLoading, error } = appSelector(x => x.auth);
    const accessToken = authStore.getAccessToken();
    const { signin, signoutAction, cleanCurrentUser } = useAppActions();
    const dispatch = useAppDipatch();

    debugger;
    const signout = () => {
        debugger;
        dispatch(signoutAction());
        dispatch(cleanCurrentUser());
    }

    const doSignin = ({email, password}) => {
        debugger;
        dispatch(signin({email, password}));
    }

    return { 
        accessToken, isLoading, error,
        signout, doSignin
     };
}