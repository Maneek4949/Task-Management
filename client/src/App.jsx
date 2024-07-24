import React from 'react';
import { TaskProvider } from './context/TaskContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';


const App = () => {
    return (
        <TaskProvider>
            <div className="md:px-16">
                <Navbar/>
                <Home/>
            </div>
        </TaskProvider>
    );
};

export default App;
