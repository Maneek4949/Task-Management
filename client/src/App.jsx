import React, { useState } from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';


const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);

    const handleOpenModal = (task = null) => {
        setTaskToEdit(task);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTaskToEdit(null);
    };

    return (
        <TaskProvider>
            <div className="app container">
                <div className="header">
                    <h1>Task Manager</h1>
                    <button className="btn btn-primary" onClick={() => handleOpenModal()}>Add Task</button>
                </div>
                <TaskList />
                <TaskForm
                    isOpen={isModalOpen}
                    onRequestClose={handleCloseModal}
                    taskToEdit={taskToEdit}
                />
            </div>
        </TaskProvider>
    );
};

export default App;
