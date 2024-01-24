import { takeLatest, call, fork, put } from "redux-saga/effects";
import { actionTypes } from "../actions/auth";
import * as authStore from "../stores/auth.store";
import * as authService from "../services/auth.service";

function* register(action) {
    try {
        const {username, email, password} = action.payload;

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
        
        authStore.setAccessToken(response.data.id_token);

        yield put({type: actionTypes.SIGNIN_SUCCESS});
    } catch (e) {
        yield put({type: actionTypes.SIGNIN_FAILED, payload: {error: e.response.data}});
    }
}

function* signOut() {
    try {
        authStore.clearAccessToken();
        yield put({type: actionTypes.SIGNOUT_SUCCESS});
    } catch {
        yield put({type: actionTypes.SIGNIN_FAILURE, payload: {error: "Signout failure"}});
    }
}

function* getRegistration() {
    yield takeLatest(actionTypes.REGISTER, register);
}

function* getSignIn() {
    yield takeLatest(actionTypes.SIGNIN, signIn);
}

function* getSignout() {
    yield takeLatest(actionTypes.SIGNOUT, signOut);
}

const AuthSagas = [fork(getRegistration), fork(getSignIn), fork(getSignout)];

export default AuthSagas;