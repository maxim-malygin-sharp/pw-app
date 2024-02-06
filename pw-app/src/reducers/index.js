import {combineReducers} from "redux";
import AuthReducer from "./auth.reducer";
import TransactionReducer from "./transaction.reducer";
import UserReducer from "./user.reducer";
import ModalReducer from "./modal.reducer";

export default combineReducers({
    auth: AuthReducer,
    transactions: TransactionReducer,
    user: UserReducer,
    modal: ModalReducer
});