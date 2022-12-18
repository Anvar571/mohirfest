import {combineReducers} from "redux"
import auth from "./authReducer";
import alert from "./alertReducer";
import task from "./taskReducer";

const rootReducer = combineReducers({
    auth,
    alert,
    task
})

export default rootReducer