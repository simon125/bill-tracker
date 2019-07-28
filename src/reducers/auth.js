const initialState = {
    user: null,
    isLoggedIn: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
            return { user: action.user, isLoggedIn: true };
        case 'LOGGED_OUT':
            return { user: null, isLoggedIn: false };
        default:
            return state;
    }
}