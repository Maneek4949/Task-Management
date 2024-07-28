import { useState, useEffect } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../services/taskService';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadTasks = async () => {
            setLoading(true);
            try {
                const response = await fetchTasks();
                setTasks(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        loadTasks();
    }, []);

    const addTask = async (task) => {
        try {
            const response = await createTask(task);
            setTasks([...tasks, response.data]);
        } catch (error) {
            setError(error.message);
        }
    };

    const editTask = async (taskId, updatedTask) => {
        try {
            const response = await updateTask(taskId, updatedTask);
            setTasks(tasks.map(task => task.id === taskId ? response.data : task));
        } catch (error) {
            setError(error.message);
        }
    };

    const removeTask = async (taskId) => {
        try {
            await deleteTask(taskId);
            setTasks(tasks.filter(task => task.id !== taskId));
        } catch (error) {
            setError(error.message);
        }
    };

    return { tasks, loading, error, addTask, editTask, removeTask };
};

export default useTasks;
