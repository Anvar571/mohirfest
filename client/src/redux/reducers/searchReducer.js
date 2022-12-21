import { SEARCH_TYPE } from "../actions/searchAction"

const initialState = {
    data: []
}

const searchAction = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_TYPE.SEARCH:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default searchAction