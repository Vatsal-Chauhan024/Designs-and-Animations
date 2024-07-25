import React, { useState } from 'react'
import VerticalNav from './VerticalNav'
import StartingContent from './StartingContent'
import MiddleContentContainer from './MiddleContentContainer'
import LowerMiddleContainer from './LowerMiddleContainer'
import ContactUs from './ContactUs'
import Footer from './Footer'


const Navbar = () => {

    const [opened, setOpened] = useState(false)

   const handleToggle = () =>{
            setOpened(!opened)
   } 

  return (
    <div>
      {
        opened? <>
      <VerticalNav handleToggle = {handleToggle}/>
        </>: <>
        <div className=' text-gray-500 flex items-center justify-between px-8 h-16 mt-4'>
        <span className="left text-blue-500 text-4xl font-medium">Homyy</span>

        <span className="hidden md:block rightNav">
            <ul className='flex items-center justify-center gap-5'>
                <li className='cursor-pointer hover:text-gray-600'>Home</li>
                <li className='cursor-pointer hover:text-gray-600'>About</li>
                <li className='cursor-pointer hover:text-gray-600'>Contact</li>
                <li className='cursor-pointer hover:text-gray-600'>Service</li>
            </ul>
        </span>

        <span className=" md:hidden rightNavMenu flex flex-col gap-2 cursor-pointer" onClick={handleToggle}>
            <hr className='bg-gray-300 w-9 h-1 rounded-sm border-none'/>
            <hr  className='bg-gray-300 w-9 h-1 rounded-sm border-none'/>
            <hr  className='bg-gray-300 w-9 h-1 rounded-sm border-none'/>
        </span>

      </div>
      <StartingContent/>
      <MiddleContentContainer/>
      <LowerMiddleContainer/>
      <ContactUs/>
      <Footer/>
        </>
      }
      
      {
        
      }
    </div>
  )
}

export default Navbar
