import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    RESET_PASSWORD,
    GET_ROLE,
    INITIATE_LOGOUT,
} from '../types';

const initialState = {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: false,
    logoutError: false,
    isAuthenticated: false,
    linkSent: false,
    user: {},
    role: "",
    logoutSuccess: false,
};

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoggingIn: true,
                loginError: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: true,
                user: action.user,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: false,
                loginError: true,
            };
        case RESET_PASSWORD:
            return {
                ...state,
                linkSent: true,
            };
        case GET_ROLE:
            return {
                ...state,
                role: action.role,
            }
        case INITIATE_LOGOUT:
            return {
                ...state,
                logoutSuccess: true,
                isAuthenticated: false,
                user: {},
                role: "",
                isLoggingOut: true,
            }
        default:
            return state;
    }
}

export default loginReducer;