import React, { useState } from 'react'
import {RxCross2} from "react-icons/rx"
import Navbar from './Navbar'

const Sidebar3 = () => {

  const[show, setShow] = useState(false) 
    
 const handleShow = () =>{
    setShow(!show)
 }
  
  return (
    <>
    {
        show ? (
           <Navbar/>
        ): ( <div className=' bg-gray-400 h-screen' >
        <RxCross2 className='text-2xl absolute right-3 cursor-pointer mt-2' onClick={handleShow}/>
        <div className=''>
            <div className='h-screen w-screen flex flex-col justify-center items-center gap-10 text-2xl'>
          <h1>Coding Lab</h1>
    
          <ul className='lists flex flex-col gap-7 '>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blogs</li>
          </ul>
          </div>
        </div>
        </div>
        )
}
    </>
  )
}

export default Sidebar3
