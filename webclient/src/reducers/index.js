import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
    employeeReducer,
    loginReducer,
});