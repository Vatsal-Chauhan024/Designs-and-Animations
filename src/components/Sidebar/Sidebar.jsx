import React, { useState } from 'react'
import {RxCross1} from 'react-icons/rx'
import {MdShortcut, MdHomeRepairService, MdFeedback, MdEvent} from 'react-icons/md'
import {CgHello} from 'react-icons/cg'
import {FcAbout} from 'react-icons/fc'
import {AiFillHome} from 'react-icons/ai'
import Threebar from './Threebar'

const Sidebar = () => {
    const [hide, setHide] = useState(false)

    const handleClick=() =>{
        setHide((prev) => !prev)
    }

  return (
    <>
   {
    hide? <Threebar onClick= {handleClick}/> :  (

    
    <div className='flex-1 w-64 text-white min-h-screen bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100'>
     <div className="headingTop flex justify-between items-center px-6 pt-6">
        <span className="headingTopLeft">DarkSquash</span> 
        <RxCross1 className='cursor-pointer hover:text-gray-300 text-xl' onClick={handleClick}/>
     </div>

    <div className="lists mt-10">
        <ul className="listItemul flex flex-col gap-y-16">
          <span className='flex justify-between px-10 cursor-pointer hover:text-gray-500'> <AiFillHome className='text-2xl '/> <li className="listItem w-16">Home</li></span>
          <span className='flex justify-between px-10 cursor-pointer  hover:text-gray-500'> <MdShortcut className='text-2xl '/> <li className="listItem w-16">Shorcuts</li></span>
          <span className='flex justify-between px-10 cursor-pointer  hover:text-gray-500'> <CgHello className='text-2xl '/> <li className="listItem w-16">Overview</li></span>
          <span className='flex justify-between px-10 cursor-pointer  hover:text-gray-500'> <MdEvent className='text-2xl '/> <li className="listItem w-16">Events</li></span>
          <span className='flex justify-between px-10 cursor-pointer  hover:text-gray-500'> <FcAbout className='text-2xl '/> <li className="listItem w-16">About</li></span>
          <span className='flex justify-between px-10 cursor-pointer  hover:text-gray-500'> <MdHomeRepairService className='text-2xl '/> <li className="listItem w-16">Service</li></span>
          <span className='flex justify-between px-10 cursor-pointer  hover:text-gray-500'> <MdFeedback className='text-2xl '/> <li className="listItem w-16">Feedback</li></span>
          

        </ul>
    </div>
    </div>
    )
}
    </>
  )
}

export default Sidebar
