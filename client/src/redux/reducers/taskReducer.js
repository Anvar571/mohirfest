import { TASK_TYPE } from "../actions/taskAction"

const initialState = {
    tasks: [],
    task: []
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case TASK_TYPE.GET_ALL_TASK:
            return {
                ...state,
                tasks: action.payload.tasks
            }
        default:
            return state
    }
}

export default taskReducer
