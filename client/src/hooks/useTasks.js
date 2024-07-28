import { useContext, useEffect, useMemo, useCallback } from 'react';
import TaskContext from '../context/TaskContext';
import { fetchTasks, createTask, updateTask, deleteTask } from '../services/taskService';

const useTasks = () => {
    const { state, dispatch } = useContext(TaskContext);
    const memoizedTasks = useMemo(() => state.tasks, [state.tasks]);

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
    }, [dispatch]); // Make sure this useEffect runs only once

    const addTask = useCallback(async (task) => {
        try {
            const response = await createTask(task);
            dispatch({ type: 'ADD_TASK', payload: response.data });
        } catch (error) {
            console.error('Failed to add task:', error);
        }
    }, [dispatch]);

    const editTask = useCallback(async (taskId, task) => {
        try {
            const response = await updateTask(taskId, task);
            dispatch({ type: 'UPDATE_TASK', payload: response.data });
        } catch (error) {
            console.error('Failed to update task:', error);
        }
    }, [dispatch]);

    const removeTask = useCallback(async (taskId) => {
        try {
            await deleteTask(taskId);
            dispatch({ type: 'DELETE_TASK', payload: taskId });
        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    }, [dispatch]);

    return {
        tasks: memoizedTasks,
        loading: state.loading,
        error: state.error,
        addTask,
        editTask,
        removeTask,
    };
};

export default useTasks;
