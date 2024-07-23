const API_URL = 'http://127.0.0.1:8000/api/tasks';

export const getTasks = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const addTask = async (task) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });
    return response.json();
};

export const updateTaskStatus = async (taskId, task) => {
    const response = await fetch(`${API_URL}/${taskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });
    return response.json();
};

export const deleteTask = async (taskId) => {
    await fetch(`${API_URL}/${taskId}`, {
        method: 'DELETE',
    });
};
