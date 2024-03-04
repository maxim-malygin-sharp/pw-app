import { takeLatest, call, fork, put } from "redux-saga/effects";
import { actionTypes } from "../actions/auth.actions";
import { cleanCurrentUser } from "../../user/actions/user.actions";
import * as authStore from "../stores/auth.store";
import * as authService from "../services/auth.service";

function* register(action) {
    try {
        const {username, email, password} = action.payload;
debugger;
        const response = yield call(authService.signUp, username, email, password);
        yield put({type: actionTypes.REGISTER_SUCCESS});

        authStore.setAccessToken(response.data.id_token);

    } catch (e) {
        yield put({type: actionTypes.REGISTER_FAILED, payload: {error: e.response.data}});
    }
}

function* signIn(action) {
    try {
        const {email, password} = action.payload;
        const response = yield call(authService.signIn, email, password);
        
        authStore.setAccessToken(response?.data?.id_token);

        yield put({type: actionTypes.SIGNIN_SUCCESS});
    } catch (e) {
        yield put({type: actionTypes.SIGNIN_FAILED, payload: {error: e.response.data}});
    }
}

function* signOut() {
    try {
        authStore.clearAccessToken();
        yield put(cleanCurrentUser());
        yield put({type: actionTypes.SIGNOUT_SUCCESS});
    } catch {
        yield put({type: actionTypes.SIGNIN_FAILED, payload: {error: "Signout failed"}});
    }
}

function* checkAuth() {
    try {
        const token = authStore.getAccessToken();
        var isAuthenticated = !!token;
        debugger;
        yield put({type: actionTypes.CHECK_AUTH_SUCCESS, payload: { isAuthenticated: isAuthenticated }});
    } catch (e) {
        yield put({type: actionTypes.CHECK_AUTH_FAILED, payload: {error: e}});
    }
}

function* watchCheckAuth() {
    yield takeLatest(actionTypes.CHECK_AUTH, checkAuth);
}

function* watchRegistration() {
    yield takeLatest(actionTypes.REGISTER, register);
}

function* watchSignIn() {
    yield takeLatest(actionTypes.SIGNIN, signIn);
}

function* watchSignout() {
    yield takeLatest(actionTypes.SIGNOUT, signOut);
}

const AuthSagas = [fork(watchRegistration), fork(watchSignIn), fork(watchSignout), fork(watchCheckAuth)];

export default AuthSagas;