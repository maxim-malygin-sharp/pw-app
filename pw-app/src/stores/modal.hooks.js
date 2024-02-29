import { appSelector, useAppDipatch, useAppActions } from "./hooks";
import { showModalAction } from "../actions/modal.actions";

export const useModal = () => {
    const { showModal } = appSelector(x => x.modal);
    const dispatch = useAppDipatch();

    
    const closeModal = () => {
        debugger;
        dispatch(showModalAction(false));
    }
    
    const openModal = () => {
        debugger;
        dispatch(showModalAction(true));
    }

    return { 
        showModal,
        openModal, closeModal
     };
}