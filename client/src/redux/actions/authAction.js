
import axios from 'axios';
import { USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS } from '../constants/authConstants';

export const registerUser = (userData, navigate) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:8888/signup', userData);
        alert("Registration Successful!");
        dispatch({ type: USER_REGISTER_SUCCESS });
        navigate('/login');
    } catch (error) {
        console.error('Unable to register', error);
        dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
    }
};

export const loginUser = (userData, navigate) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:8888/login', userData);
        const token = response.data.token;
        console.log(token);
        alert('Login Successful!');
        dispatch({ type: USER_LOGIN_SUCCESS, payload: token });
        navigate('/homepage');
        window.location.reload();
        localStorage.setItem('token', token);
    } catch (error) {
        console.log('Unable to login');
        dispatch({ type: USER_LOGIN_FAIL, payload: error.message });
    }
};

export const logoutUser = (navigate) => async (dispatch) => {
    try {
        localStorage.removeItem('token');
        dispatch({ type: USER_LOGOUT_SUCCESS });
        navigate('/login');
    } catch (error) {
        console.error('Unable to logout', error);
    }
};