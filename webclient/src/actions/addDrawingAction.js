import firebase from '../Firebase';
import { ADD_DRAWING } from '../types';

export const addDrawing = () => {
    return {
        type: ADD_DRAWING,
    };
}

export const AddDrawing = (drawingNumber, inspectorName, quantity, description, timestamp, time) = dispatch => {

}