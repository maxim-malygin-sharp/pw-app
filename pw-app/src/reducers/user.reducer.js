import {actionTypes} from "../actions/user.actions";

const INIT_STATE = {
    isLoggedIn: false,
    isLoading: false,
    users: [],
    currentUser: null,
    error: null,
};

export default function transaction(state = INIT_STATE, action) {
    switch (action.type) {
        case actionTypes.GET_USERS: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case actionTypes.GET_USERS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                users: action.payload.users,
                error: null,
            };
        }
        case actionTypes.GET_USERS_FAILED: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        }

        case actionTypes.GET_CURRENT_USER: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case actionTypes.GET_CURRENT_USER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                currentUser: action.payload.currentUser,
                error: null,
            };
        }
        case actionTypes.GET_CURRENT_USER_FAILED: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        }
        case actionTypes.CLEAN_CURRENT_USER: {
            debugger;
            return {
                ...state,
                isLoading: false,
                error: null,
                currentUser: null
            };
        }
        default:
            return state;
    }
}