import {combineReducers} from "redux"
import auth from "./authReducer";
import alert from "./alertReducer";
import tasks from "./taskReducer";
import search from "./searchReducer";

const rootReducer = combineReducers({
    auth,
    alert,
    tasks,
    search
})

export default rootReducer