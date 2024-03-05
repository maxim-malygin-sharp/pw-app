import {actionTypes} from "../actions/transaction.actions";

const INIT_STATE = {
    isLoading: false,
    transaction: null,
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
        case actionTypes.SET_REPEAT_TRANSACTION: {
            return {
                ...state,
                isLoading: false,
                transaction: { recipient: action.payload.recipient, amount: action.payload.amount },
                error: null,
            };
        }
        case actionTypes.CREATE_TRANSACTION_SUCCESS:
        case actionTypes.CREATE_TRANSACTION_FAILED: {
            return {
                ...state,
                isLoading: false,
                transaction:null,
                error: null,
            };
        }
        default:
            return state;
    }
}