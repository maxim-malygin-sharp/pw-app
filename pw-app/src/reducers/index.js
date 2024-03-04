import {combineReducers} from "redux";
import AuthReducer from "../features/auth/reducers/auth.reducer";
import TransactionReducer from "../features/transaction/reducers/transaction.reducer";
import UserReducer from "../features/user/reducers/user.reducer";
import ModalReducer from "../features/modal/reducers/modal.reducer";

export default combineReducers({
    auth: AuthReducer,
    transactions: TransactionReducer,
    user: UserReducer,
    modal: ModalReducer
});