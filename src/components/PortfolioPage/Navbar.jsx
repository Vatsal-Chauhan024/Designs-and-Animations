import React, { useState } from 'react'
import VerticalNav from './VerticalNav'
import BodyContainer from './BodyContainer'


const Navbar = () => {

    const [toggle, setToggle] = useState(false)


    const handleToggle = () =>{
        setToggle(!toggle)
    }

  return (
    <div className='px-5 '>
        
        {
            toggle? <VerticalNav handleToggle = {handleToggle}/> : 
            <>
            <div className=' flex justify-between items-center w-full pt-5'>
            <div className="leftSpan text-3xl font-semibold flex ">
            <h1 className=' text-white flex items-center justify-center'>Portfo<span className='text-red-600'>lio</span></h1>
          </div>
  
          <div className="menus flex flex-col justify-center items-center bg-white h-9 w-9 rounded-sm gap-1 cursor-pointer md:hidden" onClick={handleToggle}>
              <hr className='bg-gray-600 h-1 w-11/12  '/>
              <hr className='bg-gray-600 h-1 w-11/12  '/>
              <hr className='bg-gray-600 h-1 w-11/12 '/>
          </div>
  
  
          <div className="hidden md:block lists">
              <ul className='ulLists flex items-center justify-center gap-10'>
                  <li className='text-white hover:text-red-600 text-base cursor-pointer'>Home</li>
                  <li className='text-white hover:text-red-600 text-base cursor-pointer'>About</li>
                  <li className='text-white hover:text-red-600 text-base cursor-pointer'>Service</li>
                  <li className='text-white hover:text-red-600 text-base cursor-pointer'>Contact</li>
              </ul>
          </div>
  
  
  
          <div className="hidden rightButtons md:flex items-center gap-6">
              <button className="login bg-white px-6 py-2 rounded-md font-semibold text-red-600 hover:text-white hover:bg-red-600">Login</button>
              <button className="login bg-white px-6 py-2 rounded-md font-semibold text-red-600  hover:text-white hover:bg-red-600">Register</button>
  
          </div>
          </div>
          {
              toggle ? "" : <BodyContainer/>
          }
          </>
        }
 
      
    </div>
  )
}

export default Navbar
