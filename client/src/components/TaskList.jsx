import React from 'react';
import useTasks from '../hooks/useTasks';
import TaskItem from './TaskItem';

const TaskList = () => {
    const { tasks, loading, error } = useTasks();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
