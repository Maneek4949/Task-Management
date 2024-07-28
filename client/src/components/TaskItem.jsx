import React, { useState,useContext } from 'react';
import useTasks from '../hooks/useTasks';
import TaskContext from '../context/TaskContext';


const TaskItem = ({ task }) => {
    const { removeTask } = useTasks();
    const [showButtons, setShowButton] = useState(false);
    const { handleOpenForm } = useContext(TaskContext);

    const handleDelete = () => {
        removeTask(task.id);
    };
    
    const handleShowButtons = ()=>{
        setShowButton(prev=>!prev)
    }

    return (
        <div className={`w-full min-h-44 overflow-y-hidden mb-4 bg-baby-orange rounded-md pt-4 pb-6 px-3 text-baby-brown` }>
            <div className='flex justify-between'>
                <h2 className='font-semibold text-xl'>{task.title}</h2>
                <div className='relative' onClick={handleShowButtons}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a9a696" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                    </svg>
                    {showButtons && <div className='bg-white absolute right-0 p-2 rounded-md w-28 flex flex-col items-start'>
                    <button onClick={()=>{handleOpenForm('Edit', task)}}>Edit ...</button>
                    <hr></hr>
                    <button onClick={handleDelete}>Delete</button>
                    </div>}
                </div>
                
            </div>
            <div>
                <p className='text-sm'>{task.description}</p>
            </div>
            

            {/* <TaskForm
                isOpen={isEditing}
                onRequestClose={handleCloseModal}
                taskToEdit={task}
            /> */}
        </div>
    );
};

export default TaskItem;
