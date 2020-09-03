const initialState = {
    items: []
};

export default (state = initialState, { type, data }) => {
    switch (type) {
        case 'DIALOGS:SET_ITEMS':
            return {
                ...state,
                items: data
            }
        default:
            return state;
    }
}