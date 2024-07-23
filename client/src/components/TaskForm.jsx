import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import useTasks from '../hooks/useTasks';

const TaskForm = ({ isOpen, onRequestClose, taskToEdit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('todo');
    const { addTask, editTask } = useTasks();

    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
            setStatus(taskToEdit.status);
        }
    }, [taskToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = { title, description, status };

        if (taskToEdit) {
            editTask(taskToEdit.id, task);
        } else {
            addTask(task);
        }

        onRequestClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Task Form">
            <form onSubmit={handleSubmit} className="task-form">
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Status</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        disabled={!taskToEdit}
                    >
                        <option value="todo">To Do</option>
                        <option value="in_progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <button type="submit">Save Task</button>
            </form>
        </Modal>
    );
};

export default TaskForm;
