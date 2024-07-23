import React, { useState } from 'react';
import useTasks from '../hooks/useTasks';
import TaskForm from './TaskForm';

const TaskItem = ({ task }) => {
    const { removeTask } = useTasks();
    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = () => {
        removeTask(task.id);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCloseModal = () => {
        setIsEditing(false);
    };

    return (
        <div className={`task-item ${task.status}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>

            <TaskForm
                isOpen={isEditing}
                onRequestClose={handleCloseModal}
                taskToEdit={task}
            />
        </div>
    );
};

export default TaskItem;
