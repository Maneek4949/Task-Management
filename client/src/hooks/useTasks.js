// src/hooks/useTasks.js
import { useState } from 'react';
import { getTasks } from '../services/taskService';

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    };

    return { tasks, fetchTasks };
};
