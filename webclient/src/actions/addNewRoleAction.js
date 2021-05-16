import { ADD_ROLE } from '../types';
import firebase from '../Firebase';

export const addRole = (code) => {
    return {
        type: ADD_ROLE,
        success: code,
    };
}

/*
    AddNewRole action registers the new user, save the detais
    and send `password reset` link to the new user.
*/
export const AddNewRole = (name, email, password, phone, role) => dispatch => {
    try {
        // Register the user email
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            let nodeEmail = email.replace('.', ','); // Firebase do not support `.` character in Node name

            // Add metadata of the user
            firebase.database().ref().child(`${role}/${nodeEmail}`).set({
                name: name,
                reg_id: email,
                phn: phone,
            });

            // Send reset link
            firebase.auth().sendPasswordResetEmail(email);

        })
        dispatch(addRole(true));
    }
    catch(err) {
        dispatch(addRole(false));
        console.log("Some unknown error occurred in adding new role", err);
    }
}

