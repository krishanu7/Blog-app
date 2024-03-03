export const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                ...state,
                user: null,
                token: null,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            };
        case 'UPDATE_USER':
            return {
                ...state,
                user: action.payload.data,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                token: null,
            }
        default:
            return state;
    }
};
