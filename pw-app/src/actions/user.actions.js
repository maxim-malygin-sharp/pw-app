export const actionTypes = {
    GET_USERS: "GET_USERS",
    GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
    GET_USERS_FAILED: "GET_USERS_FAILED",
    
    GET_CURRENT_USER: "GET_CURRENT_USER",
    GET_CURRENT_USER_SUCCESS: "GET_CURRENT_USER_SUCCESS",
    GET_CURRENT_USER_FAILED: "GET_CURRENT_USER_FAILED"
};

export const getUsers = () => ({
    type: actionTypes.GET_USERS
});
export const getUsersSuccess = ([{id, date, username, amount, balance}]) => ({
    type: actionTypes.GET_USERS_SUCCESS,
    payload: {transactions: [{id, date, username, amount, balance}]},
});
export const getUsersFailed = (error) => ({
    type: actionTypes.GET_USERS_FAILED,
    payload: {error},
});

export const getCurrentUser = () => ({
    type: actionTypes.GET_CURRENT_USER
});
export const getCurrentUserSuccess = ([{id, date, username, amount, balance}]) => ({
    type: actionTypes.GET_CURRENT_USER_SUCCESS,
    payload: {transactions: [{id, date, username, amount, balance}]},
});
export const getCurrentUserFailed = (error) => ({
    type: actionTypes.GET_CURRENT_USER_FAILED,
    payload: {error},
});
