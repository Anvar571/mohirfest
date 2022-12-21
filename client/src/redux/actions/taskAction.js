import { GLOBAL_TYPES } from "./globalType"
import {getDataAPI, postDataAPI} from "../../utils/serverAPI";

export const TASK_TYPE = {
    GET_TASK:   "GET_TYPE",
    GET_ALL_TASK:"GET_ALL_TASK",
    CREATE_TASK:"CREATE_TASK",
}

// o'zgartirmang
export const createTask = (data, token) => async (dispatch) =>  {
    try {
        const res= await postDataAPI("topshiriqlar/task", data, token);
        dispatch({
            type: TASK_TYPE.CREATE_TASK,
            payload: res.data
        })

        dispatch({
            type: GLOBAL_TYPES.ALERT,
            payload: {
                success: res.data.msg
            }
        })
    } catch (error) {
        dispatch({
            type: GLOBAL_TYPES.ALERT,
            payload: {error: error.response.data.msg}
        })
    }
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

// export const getByIdTask = (id, taskid, token) => async (dispatch) => {
//     // try {
//         const res = await getDataAPI(`topshriqlar/${id}/${taskid}`, token)
//         dispatch({
//             type: TASK_TYPE.GET_TASK,
//             payload: res
//         })
//         // console.log(res);
//     // } catch (error) {
//         // dispatch({
//         //     type: GLOBAL_TYPES.ALERT,
//         //     payload: {error: error.response.data.msg}
//         // })
//     }
// // }