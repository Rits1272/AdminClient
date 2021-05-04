import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import loginReducer from "./loginReducer";
import addNewRoleReducer from "./addNewRoleReducer";

export default combineReducers({
    employeeReducer,
    loginReducer,
    addNewRoleReducer,
});