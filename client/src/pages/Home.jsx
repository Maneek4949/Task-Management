import React,{useContext} from 'react'
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import SideBar from '../components/SideBar';
import TaskContext from '../context/TaskContext';

const Home = ()=> {
    const { state } = useContext(TaskContext);
  return (
    <main className='flex flex-col md:flex-row'>
                    <SideBar/>
                    {state.showForm ? 
                    <TaskForm />:
                    <TaskList/>}
    </main>
  )
}

export default Home