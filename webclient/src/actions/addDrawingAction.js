import firebase from '../Firebase';
import { ADD_DRAWING, GET_INSPECTOR } from '../types';

export const addDrawing = () => {
    return {
        type: ADD_DRAWING,
    };
}

export const fetchInspectors = (inspectors) => {
    return {
        type: GET_INSPECTOR,
        payload: inspectors,
    };
}

export const getInspector = () => dispatch => {
    const inspectors = {};
    const ref = firebase.database().ref();
    
    // Fetching the list of inspector names
    ref.child('inspector').once("value", snap => {
        const data = snap.val();
        if(data !== null){
            Object.keys(data).map(key => {
                inspectors[data[key]['name']] = data[key]['phn'];
                inspectors['i_token'] = data[key]['i_token']
            });
        }
    })
    .then(() => dispatch(fetchInspectors(inspectors)));
}

export const AddNewDrawing = (drawing, inspector, contact, quantity, i_token) => dispatch => {
    const ref = firebase.database().ref();
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0
    var yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;

    ref.child(`item/${drawing}`).set({
        drawing_no: drawing,
        phone: contact,
        status: "TO BE CALL",
        quantity: quantity,
        date: today,
        time: time,
        inspector_name: inspector,  
        quantity_inspected: 0, 
        i_token: i_token,
    }).then(() => dispatch(addDrawing()));
}       