import { ADD_ROLE } from '../types';

const initialState = {
    success: false, // user registered successfully?
}

const addNewRoleReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_ROLE:
            return {
                ...state,
                success: true,
            };
        default:
            return state;
    }
}

export default addNewRoleReducer;