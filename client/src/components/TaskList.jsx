import {useEffect} from 'react';
import TaskItem from './TaskItem';
import { useTasks } from '../hooks/useTasks';

const TaskList = () => {
    const { tasks, fetchTasks } = useTasks();

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return (
        <div className="container mt-3">
            <h2>Task List</h2>
            <ul className="list-group">
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
