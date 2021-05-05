import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import loginReducer from "./loginReducer";
import addNewRoleReducer from "./addNewRoleReducer";
import reportReducer from "./reportReducer";
import drawingReducer from "./addDrawingReducer";

export default combineReducers({
    employeeReducer,
    loginReducer,
    addNewRoleReducer,
    reportReducer,
    drawingReducer,
});