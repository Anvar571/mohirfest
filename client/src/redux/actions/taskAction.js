import { GLOBAL_TYPES } from "./globalType"
import {getDataAPI, postDataAPI, patchDataApi, deleteDataApi} from "../../utils/serverAPI";

export const createTask = () => async (dispatch) =>  {
    try {
        
    } catch (error) {
        
    }
}

export const searchTask = () => async (dispatch) =>  {

}

export const updateTask = () => async (dispatch) =>  {

}

export const getTask = (token) => async (dispatch) => {
    try {
        const res = await getDataAPI('topshiriqlar/task', token)
        dispatch({
            type: GLOBAL_TYPES.TASK,
            payload: {...res.data}
        })
    } catch (err) {
        dispatch({
            type: GLOBAL_TYPES.ALERT,
            payload: {error: err.response.data.msg}
        })
    }
}

