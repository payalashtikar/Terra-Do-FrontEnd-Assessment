
import { ADD_TASK_SUCCESS, DELETE_TASK_SUCCESS, GET_ALL_TASKS_SUCCESS, UPDATE_TASK_SUCCESS } from "../constants/taskConstants";

const initialState = {
    tasks: [],
};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.payload,
            };

        case ADD_TASK_SUCCESS:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };

        case UPDATE_TASK_SUCCESS:
            return state;

        case DELETE_TASK_SUCCESS:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task._id !== action.payload),
            };

        default:
            return state;
    }
};

