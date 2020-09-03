const initialState = {
    userData: {
        user: null,
        isAuth: !!localStorage.getItem('token')
    }
};

export default (state = initialState, { type, data }) => {
    switch (type) {
        case 'USER:SET_DATA':
            return {
                ...state,
                userData: data
            }
        default:
            return state;
    }
}