import {actionTypes} from "../actions/modal.actions";

const INIT_STATE = {
    showModal: false
};

export default function modal(state = INIT_STATE, action) {
    switch (action.type) {
        case actionTypes.SHOW_MODAL: {
            return {
                ...state,
                showModal: action.payload.showModal
            };
        }
        default:
            return state;
    }
}