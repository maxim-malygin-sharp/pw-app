import { appSelector, useAppDipatch, useAppActions } from "../../../stores/hooks";
import { showModalAction } from "../actions/modal.actions";

export const useModal = () => {
    const { showModal } = appSelector(x => x.modal);
    const dispatch = useAppDipatch();

    
    const closeModal = () => {
        
        dispatch(showModalAction(false));
    }
    
    const openModal = () => {
        
        dispatch(showModalAction(true));
    }

    return { 
        showModal,
        openModal, closeModal
     };
}