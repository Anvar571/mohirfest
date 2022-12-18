import { GLOBAL_TYPES } from "../actions/globalType"

const initialState = {
    tasks: []
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBAL_TYPES.TASK:
            return {
                ...state,
                tasks: action.payload.tasks
            }
        default:
            return state
    }
}

export default authReducer
