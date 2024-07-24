import axios from 'axios';

const API_URL = 'https://task-management-7tme.onrender.com/api/tasks';

export const fetchTasks = async () => {
    return await axios.get(API_URL);
};

export const createTask = async (task) => {
    return await axios.post(API_URL, task);
};

export const updateTask = async (taskId, task) => {
    return await axios.put(`${API_URL}/${taskId}`, task);
};

export const deleteTask = async (taskId) => {
    return await axios.delete(`${API_URL}/${taskId}`);
};
