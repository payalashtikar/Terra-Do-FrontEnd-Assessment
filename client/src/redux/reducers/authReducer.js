import { USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS } from "../constants/authConstants";


const initialState = {
    error: null,
    token: localStorage.getItem('token') || null,
};


export const userRegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                error: null,
            };
        case USER_REGISTER_FAIL:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                token: action.payload,
            };
        case USER_LOGIN_FAIL:
            return {
                ...state,
                error: action.payload,
                token: null,
            };

        case USER_LOGOUT_SUCCESS:
            return {
                // ...state,
                // error: null,
                // token: null,
            };

        default:
            return state;
    }
};


