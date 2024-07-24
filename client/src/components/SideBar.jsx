import React from 'react'

const SideBar = () => {
  return (
    <aside className="md:w-1/5 md:px-2">
        <nav className='w-full'>
            <ul className='text-baby-brown font-medium'>
                <li className='flex md:mb-8'>
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