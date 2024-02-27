import { appSelector, useAppDipatch, useAppActions } from "./hooks";
import { getCurrentUser, getUsers } from "../actions/user.actions";

export const useUser = () => {
    const { currentUser, error, isLoading, users  } = appSelector(x => x.user);
    const dispatch = useAppDipatch();

    debugger;
    const loadCurrentUser = () => {
        if (!!currentUser){
            dispatch(getCurrentUser());
        }
    }
    const fetchUsers = () => {
        if (!!users && !isLoading)
        {
            dispatch(getUsers());
        }
    }

    return { 
        currentUser, isLoading, error, users,
        loadCurrentUser, fetchUsers
     };
}