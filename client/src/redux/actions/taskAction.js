import { GLOBAL_TYPES } from "./globalType"
import {getDataAPI} from "../../utils/serverAPI";

export const TASK_TYPE = {
    GET_TASK:   "GET_TYPE",
    GET_ALL_TASK:"GET_ALL_TASK",
    CREATE_TASK:"CREATE_TASK",
}

export const createTask = () => async (dispatch) =>  {
    try {
        
    } catch (error) {
        
    }
}

export const searchTask = () => async (dispatch) =>  {

}

export const updateTask = () => async (dispatch) =>  {

}

// o'zgartirmang
export const getTask = (token) => async (dispatch) => {
    try {
        const res = await getDataAPI('topshiriqlar/task', token)
        dispatch({
            type: TASK_TYPE.GET_ALL_TASK,
            payload: {...res.data}
        })
    } catch (err) {
        dispatch({
            type: GLOBAL_TYPES.ALERT,
            payload: {error: err.response.data.msg}
        })
    }
}

export const getByIdTask = (id, taskid, token) => async (dispatch) => {
    try {
        const res = await getDataAPI(`topshriqlar/${id}/${taskid}`, token)
        dispatch({
            type: TASK_TYPE.GET_TASK,
            payload: {...res.data}
        })
        console.log(res);
    } catch (error) {
        dispatch({
            type: GLOBAL_TYPES.ALERT,
            payload: {error: error.response.data.msg}
        })
    }
}