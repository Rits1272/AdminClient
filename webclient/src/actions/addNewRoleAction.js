import { ADD_ROLE } from '../types';
import firebase from '../Firebase';

export const addRole = () => {
    return {
        type: ADD_ROLE,
    };
}

/*
    AddNewRole action registers the new user, save the detais
    and send `password reset` link to the new user.
*/
export const AddNewRole = (name, email, password, phone, role) => dispatch => {
    try {
        // Register the user email
        firebase.auth().createUserWithEmailAndPassword(email, password);

        let nodeEmail = email.replace('.', ','); // Firebase do not support `.` character in Node name

        // Add metadata of the user
        firebase.database().ref().child(`${role}/${nodeEmail}`).set({
            name: name,
            reg_id: email,
            phn: phone,
        });

        // Send Password Reset Link. Timeout is fix latency issues
        setTimeout(() => {
            firebase.auth().sendPasswordResetEmail(email);
        }, 1000);

        dispatch(addRole());
    }
    catch(err) {
        console.log("Some unknown error occurred", err);
    }
}

