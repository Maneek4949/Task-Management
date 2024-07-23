import {useState} from 'react';
import { updateTaskStatus, deleteTask } from '../services/taskService';

const TaskItem = ({ task }) => {
    const [status, setStatus] = useState(task.status);

    const handleStatusChange = async (newStatus) => {
        const updatedTask = await updateTaskStatus(task.id, { ...task, status: newStatus });
        setStatus(updatedTask.status);
    };

    const handleDelete = async () => {
        await deleteTask(task.id);
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <h5>{task.title}</h5>
                <p>{task.description}</p>
                <span className={`badge bg-${status === 'done' ? 'success' : 'secondary'}`}>
                    {status}
                </span>
            </div>
            <div>
                {status !== 'done' && (
                    <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => handleStatusChange('done')}
                    >
                        Mark as Done
                    </button>
                )}
                <button className="btn btn-danger btn-sm" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TaskItem;
