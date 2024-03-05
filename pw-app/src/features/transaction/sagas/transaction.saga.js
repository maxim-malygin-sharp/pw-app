import {takeEvery, takeLatest, call, fork, put} from "redux-saga/effects";
import {actionTypes} from "../actions/transaction.actions";
import * as transactionService from "../services/transaction.service";
import * as authStore from "../../auth/stores/auth.store";
import { UNAUTIORIZED } from "../../../config/constants";
import { signoutAction } from "../../auth/actions/auth.actions";

function* getTransactions() {
    try {
        const token = authStore.getAccessToken();
        const { data } = yield call(transactionService.getTransactions, token);

        
        yield put({
            type: actionTypes.GET_TRANSACTIONS_SUCCESS,
            payload: {transactions: data.trans_token},
        });

    } catch (e) {
        if (!!e.response && e.response.status === UNAUTIORIZED){
            yield put(signoutAction());
        }
        yield put({
            type: actionTypes.GET_TRANSACTIONS_FAILED,
             payload: {error: e.response.data}
        });
    }
}

function* createTransactions(action) {
    try {
        
        const token = authStore.getAccessToken();
        const { data } = yield call(transactionService.createTransactions, token, action.payload.recipient, action.payload.amount);

        
        yield put({
            type: actionTypes.CREATE_TRANSACTION_SUCCESS
        });

    } catch (e) {
        if (!!e.response && e.response.status === UNAUTIORIZED){
            yield put(signoutAction());
        }
        yield put({
            type: actionTypes.CREATE_TRANSACTION_FAILED,
             payload: {error: e.response.data}
        });
    }
}

function* watchGetTransactions() {
    yield takeEvery(actionTypes.GET_TRANSACTIONS, getTransactions);
}

function* watchCreateTransaction() {
    yield takeLatest(actionTypes.CREATE_TRANSACTION, createTransactions);
}


const TransactionSagas = [fork(watchGetTransactions), fork(watchCreateTransaction)];
export default TransactionSagas;