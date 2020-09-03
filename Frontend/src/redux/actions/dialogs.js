import { dialogsAPI } from '../../utils/api';

const setDialogs = () => {
    return dispatch => {
        dialogsAPI.getAll()
            .then(({data}) => {
                    dispatch({
                        type: 'DIALOGS:SET_ITEMS',
                        data: data
                    })
            });
    }
};

export default setDialogs;