import {takeEvery, call, fork, put} from "redux-saga/effects";
import {actionTypes} from "../actions/transaction.actions";
import * as transactionService from "../services/transaction.service";
import * as authStore from "../../auth/stores/auth.store";
import { UNAUTIORIZED } from "../../../config/constants";
import { signoutAction } from "../../auth/actions/auth.actions";

function* getTransactions() {
    try {
        const token = authStore.getAccessToken();
        const { data } = yield call(transactionService.getTransactions, token);

        debugger;
        yield put({
            type: actionTypes.GET_TRANSACTIONS_SUCCESS,
            payload: {data: data.trans_token.reverse()},
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

function* watchGetTransactions() {
    yield takeEvery(actionTypes.GET_TRANSACTIONS, getTransactions);
}

const TransactionSagas = [fork(watchGetTransactions)];
export default TransactionSagas;