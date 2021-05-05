import  { GET_INSPECTOR, ADD_DRAWING } from '../types';

const intital_state = {
    inspector: [],
    success: false,
}

const drawingReducer = (state=intital_state, action) => {
    switch(action.type){
        case GET_INSPECTOR:
            return {
                ...state,
                inspector: action.payload,
            };
        case ADD_DRAWING:
            return {
                ...state,
                success: true
            };
        default:
            return state;
    }
};

export default drawingReducer;