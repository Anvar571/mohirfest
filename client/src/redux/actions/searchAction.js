import { getDataAPI } from "../../utils/serverAPI"
import { GLOBAL_TYPES } from "./globalType"

export const SEARCH_TYPE = {
    SEARCH: "SEARCH"
}

export const searchTasks = (search, token) => async (dispatch) => {
    try {
        const res = await getDataAPI(`topshiriqlar/search?title=${search}`, token)
        dispatch({
            type: SEARCH_TYPE.SEARCH,
            payload: res.data.task
        })
    } catch (error) {
        dispatch({
            type: GLOBAL_TYPES.ALERT,
            payload: {
                error: error.response.data.msg
            }
        })
    }
}