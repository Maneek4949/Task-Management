import React, { useState, useContext, useEffect } from 'react';
import TaskContext from '../context/TaskContext';
import useTasks from '../hooks/useTasks';

const TaskForm = () => {
    const { state, dispatch } = useContext(TaskContext);
    const { addTask, editTask } = useTasks();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('todo');

    useEffect(() => {
        if (state.formType === 'Edit' && state.currentTask) {
            setTitle(state.currentTask.title);
            setDescription(state.currentTask.description);
            setStatus(state.currentTask.status);
        } else {
            setTitle('');
            setDescription('');
            setStatus('todo');
        }
    }, [state.formType, state.currentTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.formType === 'Edit') {
            editTask(state.currentTask.id, { title, description, status });
        } else {
            addTask({ title, description, status });
        }
        dispatch({ type: 'TOGGLE_FORM', payload: { formType: 'New' } });
    };

    return (
        <section className='m-auto w-full grid justify-center'>
            <h2 className='block text-baby-brown text-xl font-bold mb-2'>Add New Task</h2>
            <form onSubmit={handleSubmit} className="w-96">
                <div className="mb-4">
                    <label className="block text-baby-brown text-sm font-bold mb-2" htmlFor="Title">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-baby-brown text-sm font-bold mb-2" htmlFor="Description">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div >
                    <label className="block text-baby-brown text-sm font-bold mb-2" htmlFor="Status">Status</label>
                    <div className='flex justify-between w-full'>
                    <select
                        className="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        disabled={state.formType !== 'Edit'}
                    >
                        <option value="todo">To Do</option>
                        <option value="in_progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Save Task</button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default TaskForm;
