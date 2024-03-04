import { appSelector, useAppDipatch } from "../../../stores/hooks";
import { createTransaction, getTransactions, setRepeatTransaction } from "../actions/transaction.actions";
import { useModal } from "../../modal/stores/modal.hooks";

export const useTransaction = () => {
    const { openModal } = useModal();
    let { transactions, transaction, isLoading, error } = appSelector(x => x.transactions)
    const dispatch = useAppDipatch();

    
    const doCreateTransaction = (recipient, amount) => {
        debugger;
        dispatch(createTransaction(recipient, amount));
    }
    
    const fetchTransactions = () => {
        debugger;
        if (!isLoading && !!transactions)
        {
            dispatch(getTransactions());
        }
    }

    const openCreationTransactionModal = () =>
    {
        openModal();
    };

    const repeatTransaction = (recipient, amount) => {
        debugger;
     
        if (amount < 0) {
            amount = Math.abs(amount);
        }   
        if (!!recipient && !!amount){
            dispatch(setRepeatTransaction(recipient, amount));
            openCreationTransactionModal();
        }
    }

    return { 
        transactions, transaction, isLoading, error,
        doCreateTransaction, fetchTransactions, repeatTransaction, openCreationTransactionModal
     };
}