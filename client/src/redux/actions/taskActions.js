import axios from 'axios';
import { ADD_TASK_SUCCESS, DELETE_TASK_SUCCESS, GET_ALL_TASKS_SUCCESS, UPDATE_TASK_SUCCESS } from '../constants/taskConstants';

export const getAllTasksSuccess = (tasks) => ({
    type: GET_ALL_TASKS_SUCCESS,
    payload: tasks,
});

export const getAllTasks = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:8888/task');
        const tasks = response.data.message;
        dispatch(getAllTasksSuccess(tasks));
    } catch (error) {
        console.error('Error getting all tasks', error);
    }
};

export const deleteTaskSuccess = (taskId) => ({
    type: DELETE_TASK_SUCCESS,
    payload: taskId,
});

export const deleteTask = (taskId) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:8888/task/${taskId}`);
        dispatch(deleteTaskSuccess(taskId));
        console.log('Deleted');
    } catch (error) {
        console.error('Error deleting task:', error);
    }
};

export const addTaskSuccess = (task) => ({
    type: ADD_TASK_SUCCESS,
    payload: task,
});

export const addTask = (task) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:8888/task', {
            taskname: task,
        });

        const data = response.data;
        dispatch(addTaskSuccess(data));
    } catch (error) {
        console.error('Error posting task:', error);
    }
};

export const updateTaskSuccess = (task) => ({
    type: UPDATE_TASK_SUCCESS,
    payload: task,
})

export const updateTask = (taskId, editedTask) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:8888/task/${taskId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                taskname: editedTask,
            })
        })
        const data = await response.json();
        dispatch(updateTaskSuccess(taskId))
        console.log('updated')
    }
    catch (error) {
        console.error('Error updating task:', error);
    }
}

