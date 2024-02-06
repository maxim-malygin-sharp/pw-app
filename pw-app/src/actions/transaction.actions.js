export const actionTypes = {
    GET_TRANSACTIONS: "GET_TRANSACTIONS",
    GET_TRANSACTIONS_SUCCESS: "GET_TRANSACTIONS_SUCCESS",
    GET_TRANSACTIONS_FAILED: "GET_TRANSACTIONS_FAILED",
    CREATE_TRANSACTION: "CREATE_TRANSACTION",
    CREATE_TRANSACTION_SUCCESS: "CREATE_TRANSACTION_SUCCESS",
    CREATE_TRANSACTION_FAILED: "CREATE_TRANSACTION_FAILED",
    SET_REPEAT_TRANSACTION: "SET_REPEAT_TRANSACTION",
};

export const getTransactions = () => ({
    type: actionTypes.GET_TRANSACTIONS
});
export const getTransactionsSuccess = ([{id, date, username, amount, balance}]) => ({
    type: actionTypes.GET_TRANSACTIONS_SUCCESS,
    payload: {transactions: [{id, date, username, amount, balance}]},
});
export const getTransactionsFailed = (error) => ({
    type: actionTypes.GET_TRANSACTIONS_FAILED,
    payload: {error},
});

export const createTransaction = (recipient, amount) => ({
    type: actionTypes.CREATE_TRANSACTION,
    payload: { recipient, amount }
});
export const createTransactionSuccess = () => ({
    type: actionTypes.CREATE_TRANSACTION_SUCCESS,
});
export const createTransactionFailed = (error) => ({
    type: actionTypes.CREATE_TRANSACTION_FAILED,
    payload: {error},
});

export const setRepeatTransaction = (recipient, amount) => ({
    type: actionTypes.SET_REPEAT_TRANSACTION,
    payload: { recipient, amount }
});