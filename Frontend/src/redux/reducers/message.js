const initialState = {
    messagesInfo: {
        currentDialogId: null,
        messages: []
    },
    isLoading: false
};

export default (state = initialState, { type, data }) => {

    switch (type) {
        case 'MESSAGES:SET_DIALOG_INFO':
            return {
                ...state,
                messagesInfo: {
                    currentDialogId: data.currentDialogId,
                    messages: data.messages
                }

            }
        case 'MESSAGES:SET_IS_LOADING':
            return {
                ...state,
                isLoading: data
            }
        default:
            return state;
    }
}