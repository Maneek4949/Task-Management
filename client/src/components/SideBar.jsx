import React, {useContext} from 'react'
import TaskContext from '../context/TaskContext';
const SideBar = () => {
  const {state, handleOpenForm } = useContext(TaskContext);

  return (
    <aside className="md:w-1/5 md:px-2">
        <nav className='w-full'>
            <ul className='text-baby-brown font-medium flex flex-row md:flex-col md:mb-0 mb-4 justify-evenly '>
                <li className='flex md:mb-8' onClick={()=>{ !state.formType && handleOpenForm(state.formType)}}>
                   <div className='w-6 h-6 bg-baby-blue rounded-full mr-4'></div> all
                </li>
                <li className='flex md:mb-8'>
                   <div className='w-6 h-6 bg-baby-pink rounded-full mr-4'></div> in progress
                </li>
                <li className='flex md:mb-8'>
                   <div className='w-6 h-6 bg-baby-green rounded-full mr-4'></div> done
                </li>
            </ul>
        </nav>
    </aside>
  )
}

export default SideBar