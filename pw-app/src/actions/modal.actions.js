export const actionTypes = {
    SHOW_MODAL: "SHOW_MODAL",
};


export const showModal = (showModal) => ({
    type: actionTypes.SHOW_MODAL,
    payload: {showModal},
});