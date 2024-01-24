import {actionTypes} from "../actions/auth.actions";

const INIT_STATE = {
    isLoggedIn: false,
    isLoading: false,
    error: null,
};

export default function auth(state = INIT_STATE, action) {
    switch (action.type) {
        case actionTypes.REGISTER: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case actionTypes.REGISTER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                error: null,
            };
        }
        case actionTypes.REGISTER_FAILED: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        }
        case actionTypes.SIGNIN: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case actionTypes.SIGNIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                error: null,
            };
        }
        case actionTypes.SIGNIN_FAILED: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        }
        case actionTypes.SIGNOUT: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case actionTypes.SIGNOUT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                error: null,
            };
        }
        case actionTypes.SIGNOUT_FAILED: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        }
        default:
            return state;
    }
}