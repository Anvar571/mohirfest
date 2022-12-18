import { GLOBAL_TYPES } from "./globalType";
import { postDataAPI } from "../../utils/serverAPI";

export const login = (data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBAL_TYPES.ALERT, payload: {} })
        const res = await postDataAPI('login', data)
        dispatch({
            type: GLOBAL_TYPES.AUTH,
            payload: {
                token: res.data.access_token,
                user: res.data.user
            }
        })

        localStorage.setItem("firstToken", true)

        dispatch({
            type: GLOBAL_TYPES.ALERT,
            payload: {
                success: res.data.msg
            }
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

export const register = (data) => async (dispatch) => {
    try {
        dispatch({type: GLOBAL_TYPES.ALERT, payload: {}})
        const res = await postDataAPI("register", data)
        dispatch({
            type: GLOBAL_TYPES.AUTH,
            payload: {
                token: res.data.access_token,
                user: res.data.user
            }
        })

        localStorage.setItem("firstToken", true)
        
        dispatch({
            type: GLOBAL_TYPES.ALERT,
            payload: {
                success: res.data.msg
            }
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

export const logout = () => async (dispatch) => {
    try {
        localStorage.removeItem("firstToken")
        await postDataAPI("logout")
        window.location.href = '/'
        dispatch({
            type: GLOBAL_TYPES.ALERT,
            payload: {
                success: "Success logout"
            }
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

export const refresh_token = () => async (dispatch) => {
    const firstToken = localStorage.getItem("firstToken")
    if (firstToken) {
        try {
            dispatch({type: GLOBAL_TYPES.ALERT, payload: {loading: true}})
            const res = await postDataAPI("refresh_token");
            dispatch({
                type: GLOBAL_TYPES.AUTH,
                payload: {
                    token: res.data.access_token,
                    user: res.data.user
                }
            })
            dispatch({type: GLOBAL_TYPES.ALERT, payload: {}})
        } catch (error) {
            dispatch({ type: GLOBAL_TYPES.ALERT, payload: { error: error.response.data.msg } })
        }
    }
}
