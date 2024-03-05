import { appSelector, useAppDipatch, useAppActions } from "../../../stores/hooks";
import * as authStore from './auth.store';

export const useAuth = () => {
    const { isLoading, error } = appSelector(x => x.auth);
    const accessToken = authStore.getAccessToken();
    const { signin, signoutAction, cleanCurrentUser } = useAppActions();
    const dispatch = useAppDipatch();

    const signout = () => {
        
        dispatch(signoutAction());
        dispatch(cleanCurrentUser());
    }

    const doSignin = ({email, password}) => {
        
        dispatch(signin({email, password}));
    }

    return { 
        accessToken, isLoading, error,
        signout, doSignin
     };
}