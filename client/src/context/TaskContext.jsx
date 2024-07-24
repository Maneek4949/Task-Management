import React, { createContext, useReducer } from 'react';

const TaskContext = createContext();

const initialState = {
    tasks: [],
    loading: false,
    error: null,
    showForm:false,
    formType:'New',
};

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_TASKS_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_TASKS_SUCCESS':
            return { ...state, loading: false, tasks: action.payload };
        case 'FETCH_TASKS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload] };
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? action.payload : task
                ),
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload),
            };
        case 'TOGGLE_FORM':
            return { ...state, showForm: !state.showForm, formType: action.payload.formType, currentTask: action.payload.task || null };
        default:
            return state;
    }
};

export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    const handleOpenForm = (formType,task)=>{
        dispatch({ type: 'TOGGLE_FORM', payload: { formType, task } });
    }

    return (
        <TaskContext.Provider value={{ state, dispatch, handleOpenForm }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;
