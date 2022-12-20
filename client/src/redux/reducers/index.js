import {combineReducers} from "redux"
import auth from "./authReducer";
import alert from "./alertReducer";
import tasks from "./taskReducer";

const rootReducer = combineReducers({
    auth,
    alert,
    tasks
})

export default rootReducer