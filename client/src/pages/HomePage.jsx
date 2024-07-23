import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const HomePage = () => {
    return (
        <div>
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default HomePage;
