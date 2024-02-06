import { all } from 'redux-saga/effects';
import AuthSagas from "./auth.saga";
import TransactionSagas from './transaction.saga'
import UserSagas from './user.saga'

export default function* rootSaga() {
    yield all([
        ...AuthSagas,
        ...TransactionSagas,
        ...UserSagas
    ]);
}