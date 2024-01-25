import { all } from 'redux-saga/effects';
import AuthSagas from "./auth.saga";

// combine all sagas
export default function* rootSaga() {
    yield all([
        ...AuthSagas,
    ]);
}