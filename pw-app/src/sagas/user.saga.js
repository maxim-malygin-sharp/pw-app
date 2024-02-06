import { call, fork, put, takeLatest, takeEvery } from "redux-saga/effects";
import { actionTypes } from "../actions/user.actions";
import * as userService from "../services/user.service";

function* getCurrentUser() {
    try {
        const response = yield call(userService.getCurrentUser);
        yield put({type: actionTypes.GET_CURRENT_USER_SUCCESS, payload: {currentUser: response.data.user_info_token}});
    } catch (e) {
        yield put({type: actionTypes.GET_CURRENT_USER_FAILURE, payload: {error: e.response.data}});
    }
}

function* getUsers() {
    try {
        const response = yield call(userService.getUsers);
        yield put({type: actionTypes.GET_USERS_SUCCESS, payload: {users: response.data}});
    } catch (e) {
        yield put({type: actionTypes.GET_USERS_FAILED, payload: {error: e.response.data}});
    }
}


function* watchGetCurrentUser() {
    yield takeLatest(actionTypes.GET_CURRENT_USER, getCurrentUser);
}

function* watchGetUsers() {
    yield takeEvery(actionTypes.GET_USERS, getUsers);
}

const UserSagas = [fork(watchGetCurrentUser), fork(watchGetUsers)];

export default UserSagas;