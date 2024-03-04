import { all } from 'redux-saga/effects';
import AuthSagas from "../features/auth/sagas/auth.saga";
import TransactionSagas from '../features/transaction/sagas/transaction.saga'
import UserSagas from '../features/user/sagas/user.saga'

export default function* rootSaga() {
    yield all([
        ...AuthSagas,
        ...TransactionSagas,
        ...UserSagas
    ]);
}