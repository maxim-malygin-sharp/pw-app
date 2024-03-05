import { appSelector, useAppDipatch } from "../../../stores/hooks";
import { getCurrentUser, getUsers } from "../actions/user.actions";

export const useUser = () => {
    const { currentUser, error, isLoading, users  } = appSelector(x => x.user);
    const dispatch = useAppDipatch();

    const loadCurrentUser = () => {
        dispatch(getCurrentUser());
    }
    const fetchUsers = () => {
        if ((!users || users.length == 0) && !isLoading)
        {
            dispatch(getUsers());
        }
    }

    return { 
        currentUser, isLoading, error, users,
        loadCurrentUser, fetchUsers
     };
}