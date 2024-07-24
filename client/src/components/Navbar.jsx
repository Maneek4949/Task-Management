import React, {useContext} from 'react'
import TaskContext from '../context/TaskContext';

const Navbar = () => {
  const { handleOpenForm } = useContext(TaskContext);
  return (
    <nav className="bg-white mb-4 sticky text-baby-brown flex space justify-between py-3 w-full">
        <h1 className='text-3xl font-bold'>todo</h1>
        <button className="text-5xl font-light " onClick={()=>{handleOpenForm('New')}}>+</button>
    </nav>
  )
}

export default Navbar;