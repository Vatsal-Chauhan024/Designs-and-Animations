import React, { useState } from 'react'
import { BiLogoMagento, BiWindowClose } from 'react-icons/bi'

const Navbar2 = () => {


  const [closeWindow, setCloseWindow] = useState(true)
  const handleToggle = () => {
    setCloseWindow(!closeWindow)
  }

  return (
    <>
      {
        closeWindow ? (
          <>
            <div className="lines bg-black h-9 w-9 flex flex-col pt-2 px-1 gap-2 rounded-sm mt-2 ml-2 cursor-pointer" onClick={handleToggle}>
              <hr />
              <hr />
              <hr />
            </div>
          </>
        ) :
          (
            <>
              <div className="crossButton absolute z-50 right-2 top-1 lg:hidden">
                <BiWindowClose className='text-3xl text-white  cursor-pointer' onClick={handleToggle} />
              </div>
              <div className='bg-black h-screen lg:h-16 w-full lg:w-full text-red-700 flex flex-col items-center justify-between lg:flex-row lg:items-center px-8 py-8 lg:py-0'>

                <div className='flex gap-2 items-center hover:text-white cursor-pointer text-xl'>
                  <BiLogoMagento className='' /> <span>BilliBoard</span>
                </div>

                <div className="ul">
                  <ul className="listing flex flex-col justify-between lg:flex-row lg:items-center gap-10 lg:gap-14 text-xl">
                    <li className='hover:text-white cursor-pointer'>Home</li>
                    <li className='hover:text-white cursor-pointer'>About</li>
                    <li className='hover:text-white cursor-pointer'>Contact</li>
                    <li className='hover:text-white cursor-pointer'>Blogs</li>
                  </ul>
                </div>

                <div className="rightButtons flex flex-col lg:flex-row items-center gap-5">
                  <button className='bg-red-700 text-white h-8 px-5 rounded-sm hover:bg-red-600'>Login</button>
                  <button className='bg-red-700 text-white h-8 px-5 rounded-sm hover:bg-red-600'>Register</button>
                </div>
              </div>
            </>

          )
      }

    </>
  )
}

export default Navbar2
