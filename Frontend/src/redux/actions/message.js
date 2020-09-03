import { messagesAPI } from '../../utils/api';
import store from '../store';

const setMessages = (dialogId) => (dispatch) => {
   const { messagesInfo } = store.getState().messages;

    if (dialogId !== messagesInfo.currentDialogId) {
        dispatch({
            type: 'MESSAGES:SET_IS_LOADING',
            data: true
        });

        messagesAPI.getAllMessagesById(dialogId).then(({ data }) => {
            dispatch({
                type: 'MESSAGES:SET_IS_LOADING',
                data: false
            });

            dispatch({
                type: 'MESSAGES:SET_DIALOG_INFO',
                data: { currentDialogId: dialogId, messages: data }
            });
        });
    }
}

export default setMessages;