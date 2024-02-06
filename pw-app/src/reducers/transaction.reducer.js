import {actionTypes} from "../actions/transaction.actions";

const INIT_STATE = {
    isLoggedIn: false,
    isLoading: false,
    transactions: [],
    error: null,
};

export default function transaction(state = INIT_STATE, action) {
    switch (action.type) {
        case actionTypes.GET_TRANSACTIONS: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case actionTypes.GET_TRANSACTIONS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                transactions: action.payload.transactions,
                error: null,
            };
        }
        case actionTypes.GET_TRANSACTIONS_FAILED: {
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