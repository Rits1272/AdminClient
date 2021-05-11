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
        Object.keys(data).map(key => {
            inspectors[data[key]['name']] = data[key]['phn'];
        });
    })
    .then(() => dispatch(fetchInspectors(inspectors)));
}

export const AddNewDrawing = (drawing, inspector, contact, quantity) => dispatch => {
    const ref = firebase.database().ref();

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '-' + dd + '-' + yyyy;

    ref.child(`item/${drawing}`).set({
        drawing_no: drawing,
        phone: contact,
        status: "TO BE CALL",
        quantity: quantity,
        date: today,
        time: time,
        inspector_name: inspector,  
        quality_inspected: 0,  
    }).then(() => dispatch(addDrawing()));
}       