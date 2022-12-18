import axios from "axios"

export const getDataAPI = (url, token) => {
    const res =  axios.get(`/api/${url}`, {
        headers: {Authorization: token}
    })
    return res
} 

export const postDataAPI = (url, post, token) => {
    const res = axios.post(`/api/${url}`, post, {
        headers: {Authorization: token}
    })
    return res
}

export const putDataApi = (url, post, token) => {
    const res = axios.put(`/api/${url}`, post, {
        headers: {Authorization: token}
    })
    return res
}

export const patchDataApi = (url, post, token) => {
    const res = axios.patch(`/api/${url}`, post, {
        headers: {Authorization: token}
    })
    return res
}

export const deleteDataApi = (url, token) => {
    const res = axios.delete(`/api/${url}`, {
        headers: {Authorization: token}
    })
    return res
}