import React from 'react'
import { RxCross1 } from 'react-icons/rx'

const VerticalNav = ({handleToggle}) => {
  return (
    <div>
        <RxCross1 className='text-gray-500 text-2xl cursor-pointer absolute right-4 top-10' onClick={handleToggle}/>
        <span className="absolute left-4 top-8 text-blue-500 text-4xl font-medium">Homyy</span>
        
        <span className="rightNav">
            <ul className=' w-screen h-screen flex flex-col items-center justify-center gap-6 text-lg'>
                <li className='cursor-pointer text-gray-500 hover:text-gray-700'>Home</li>
                <li className='cursor-pointer text-gray-500 hover:text-gray-700'>About</li>
                <li className='cursor-pointer text-gray-500  hover:text-gray-700'>Service</li>
                <li className='cursor-pointer text-gray-500 hover:text-gray-700'>Contact</li>
            </ul>
        </span>
      </div>
  )
}

export default VerticalNav
