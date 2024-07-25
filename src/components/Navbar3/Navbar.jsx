import React, { useState } from 'react'
import Sidebar3 from './Sidebar3'



const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () =>{
        setToggle(!toggle)
    }

  return (
    <div>
    {

    toggle ? (
    <Sidebar3/> ):(

  
            <div className="main w-full h-full flex justify-between px-9 pt-6">
        <div className="left text-2xl">
            <h1 className='cursor-pointer'>Coding Lab</h1>
        </div>
        <div className="right">
            <div className="lg:hidden bars flex flex-col gap-2 cursor-pointer" onClick={handleToggle}>
                <hr className='border-[1px] border-solid border-black w-9'/>
                <hr className='border-[1px] border-solid border-black w-9'/>
                <hr className='border-[1px] border-solid border-black w-9'/>
            </div>



            <ul className='hidden ul-list lg:flex items-center justify-center gap-5'>
                <li className='hover:shadow-inner hover:rounded-sm hover:border-2 hover:border-white hover:border-solid  px-2 cursor-pointer h-7'>Home</li>
                <li className='hover:shadow-inner hover:rounded-sm hover:border-2 hover:border-white hover:border-solid  px-2 cursor-pointer h-7'>About</li>
                <li className='hover:shadow-inner hover:rounded-sm hover:border-2 hover:border-white hover:border-solid  px-2 cursor-pointer h-7'>Contact</li>
                <li className='hover:shadow-inner hover:rounded-sm hover:border-2 hover:border-white hover:border-solid  px-2 cursor-pointer h-7'>Blog</li>
            </ul>
        </div>
      </div>
    )
      }
    </div>
  )
}

export default Navbar
