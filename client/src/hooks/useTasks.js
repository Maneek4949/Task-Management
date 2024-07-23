import { useContext, useEffect } from 'react';
import TaskContext from '../context/TaskContext';
import { fetchTasks, createTask, updateTask, deleteTask } from '../services/taskService';

const useTasks = () => {
    const { state, dispatch } = useContext(TaskContext);

    useEffect(() => {
        const getTasks = async () => {
            dispatch({ type: 'FETCH_TASKS_REQUEST' });
            try {
                const response = await fetchTasks();
                dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: response.data });
            } catch (error) {
                dispatch({ type: 'FETCH_TASKS_FAILURE', payload: error.message });
            }
        };
        getTasks();
    }, [dispatch]);

    const addTask = async (task) => {
        try {
            const response = await createTask(task);
            dispatch({ type: 'ADD_TASK', payload: response.data });
        } catch (error) {
            console.error('Failed to add task:', error);
        }
    };

    const editTask = async (taskId, task) => {
        try {
            const response = await updateTask(taskId, task);
            dispatch({ type: 'UPDATE_TASK', payload: response.data });
        } catch (error) {
            console.error('Failed to update task:', error);
        }
    };

    const removeTask = async (taskId) => {
        try {
            await deleteTask(taskId);
            dispatch({ type: 'DELETE_TASK', payload: taskId });
        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    };

    return {
        tasks: state.tasks,
        loading: state.loading,
        error: state.error,
        addTask,
        editTask,
        removeTask,
    };
};

export default useTasks;
