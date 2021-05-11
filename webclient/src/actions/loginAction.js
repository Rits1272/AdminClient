import firebase from '../Firebase';
import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    RESET_PASSWORD,
    GET_ROLE,
    INITIATE_LOGOUT,
} from '../types';

export const requestLogin = () => {
    return {
        type: LOGIN_REQUEST,
    };
}

export const receiveLogin = (user) => {
    return {
        type: LOGIN_SUCCESS,
        user: user,
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

export const getRole = (role) => {
    return {
        type: GET_ROLE,
        role: role,
    };
}

export const logout = () => {
    return {
        type: INITIATE_LOGOUT,
    };
}

export const loginUser = (email, password) => dispatch => {
    dispatch(requestLogin());
    firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
        user ? dispatch(receiveLogin(user)) : dispatch(loginError());
    })
};

export const logoutUser = () => dispatch => {
    firebase.auth().signOut();
    dispatch(logout());
}

export const userRole = (email) => dispatch => {
    let role = "";
    const ref = firebase.database().ref();

    // Retrieving the role of the user
    ref.child('admin').once("value", snap => {
        const data = snap.val();
        Object.keys(data).map(key => {
            if(data[key]["reg_id"] === email){
                role = "admin";
            }
        })
    }).then(() => {
        if(role !== ""){
            role = role[0].toUpperCase() + role.slice(1);
            dispatch(getRole(role));
        }
    })

    ref.child('inspector').once("value", snap => {
        const data = snap.val();
        Object.keys(data).map(key => {
            if(data[key]["reg_id"] === email){
                role = "inspector"
            }
        })
    }).then(() => {
        if(role !== ""){
            role = role[0].toUpperCase() + role.slice(1);
            dispatch(getRole(role));
        }
    })

    ref.child('custodian').once("value", snap => {
        const data = snap.val();
        Object.keys(data).map(key => {
            if(data[key]["reg_id"] === email){
                role = "custodian";
            }
        })
    }).then(() => {
        if(role !== ""){
            role = role[0].toUpperCase() + role.slice(1);
            dispatch(getRole(role));
        }
    })

    ref.child('power_user').once("value", snap => {
        const data = snap.val();
        Object.keys(data).map(key => {
            if(data[key]["reg_id"] === email){
                role = "Power user";
            }
        })
    }).then(() => {
        if(role !== ""){
            role = role[0].toUpperCase() + role.slice(1);
            dispatch(getRole(role));
        }
    })

    ref.child('monitor').once("value", snap => {
        const data = snap.val();
        Object.keys(data).map(key => {
            if(data[key]["reg_id"] === email){
                role = "monitor";
            }
        })
    }).then(() => {
        if(role !== ""){
            role = role[0].toUpperCase() + role.slice(1);
            dispatch(getRole(role));
        }
    })
}

// Send Reset mail to the user
export const resetPassword = (email) => dispatch => {
    firebase.auth().sendPasswordResetEmail(email).then(dispatch(reset()));
}