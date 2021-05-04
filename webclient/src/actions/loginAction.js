import firebase from '../Firebase';
import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    RESET_PASSWORD
} from '../types';

export const requestLogin = () => {
    return {
        type: LOGIN_REQUEST,
    };
}

export const receiveLogin = () => {
    return {
        type: LOGIN_SUCCESS,
    };
}

export const loginError = () => {
    return {
        type: LOGIN_FAILURE,
    };
}

export const reset = () => {
    return {
        type: RESET_PASSWORD,
    };
}

export const loginUser = (email, password) => dispatch => {
    dispatch(requestLogin());
    firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
        user ? dispatch(receiveLogin()) : dispatch(loginError());
    })
};

export const resetPassword = (email) => dispatch => {
    firebase.auth().sendPasswordResetEmail(email).then(dispatch(reset()));
}