export const actionTypes = {
    REGISTER: "REGISTER",
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAILED: "REGISTER_FAILED",
    SIGNIN: "SIGNIN",
    SIGNIN_SUCCESS: "SIGNIN_SUCCESS",
    SIGNIN_FAILED: "SIGNIN_FAILED",
    SIGNOUT: "SIGNOUT",
    SIGNOUT_SUCCESS: "SIGNOUT_SUCCESS",
    SIGNOUT_FAILED: "SIGNOUT_FAILED",
};

export const register = ({username, email, password}) => ({
    type: actionTypes.REGISTER,
    payload: {username, email, password},
});

export const registerSuccess = () => ({
    type: actionTypes.REGISTER_SUCCESS,
});

export const registerFailed = ({error}) => ({
    type: actionTypes.REGISTER_FAILED,
    payload: {error},
});

export const signin = ({email, password}) => ({
    type: actionTypes.SIGNIN,
    payload: {email, password},
});

export const signinSuccess = () => ({
    type: actionTypes.SIGNIN_SUCCESS,
});

export const signinFailed = ({error}) => ({
    type: actionTypes.SIGNIN_FAILED,
    payload: {error},
});

export const signoutAction = () => ({
    type: actionTypes.SIGNOUT,
});

export const signoutSuccessAction = () => ({
    type: actionTypes.SIGNOUT_SUCCESS,
});

export const signoutFailedAction = ({error}) => ({
    type: actionTypes.SIGNOUT_FAILED,
    payload: {error},
});