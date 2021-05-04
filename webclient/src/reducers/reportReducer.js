import { DAILY_REPORT, MONTHLY_REPORT } from '../types';

const initial_state = {
    data: [],
};

const reportReducer = (state=initial_state, action) => {
    switch(action.type){
        case DAILY_REPORT:
            return {
               ...state, 
               data: action.payload,
            };
        default:
            return state;
    }
}

export default reportReducer;