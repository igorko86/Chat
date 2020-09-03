import { axios } from '../../core';

export default {
    getAllMessagesById: (dialogId) => axios.get('/messages/?dialogId=' + dialogId)
};