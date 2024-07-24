import React from 'react';
import useTasks from '../hooks/useTasks';
import TaskItem from './TaskItem';

const TaskList = () => {
    const { tasks, loading, error } = useTasks();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section className="md:ml-6 w-full grid grid-cols-2 gap-4">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </section>
    );
};

export default TaskList;
