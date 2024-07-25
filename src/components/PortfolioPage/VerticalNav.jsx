import React from 'react'
import { RxCross1 } from 'react-icons/rx'

const VerticalNav = ({handleToggle}) => {
  return (
    <div className='w-full'>
    <RxCross1 className='absolute right-7 top-8 text-white text-3xl cursor-pointer' onClick={handleToggle}/>
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <div className="leftSpan text-3xl font-semibold flex mb-5">
          <h1 className=' text-white flex items-center justify-center'>Portfo<span className='text-red-800'>lio</span></h1>
        </div>
        <hr className='bg-gray-600 h-[2px] w-11/12 border-none rounded-sm  '/>


        <div className="lists my-4">
            <ul className='ulLists flex flex-col items-center justify-center gap-10'>
                <li className='text-white hover:text-red-800 text-base cursor-pointer'>Home</li>
                <li className='text-white hover:text-red-800 text-base cursor-pointer'>About</li>
                <li className='text-white hover:text-red-800 text-base cursor-pointer'>Service</li>
                <li className='text-white hover:text-red-800 text-base cursor-pointer'>Contact</li>
            </ul>
        </div>
        <hr className='bg-gray-600 h-[2px] w-11/12 border-none rounded-sm  '/>


        <div className="rightButtons flex items-center gap-10 mt-10">
            <button className="login bg-white px-6 py-2 rounded-md font-semibold text-red-800 hover:text-white hover:bg-red-800">Login</button>
            <button className="login bg-white px-6 py-2 rounded-md font-semibold text-red-800  hover:text-white hover:bg-red-800">Register</button>

        </div>


    </div>
    </div>
  )
}

export default VerticalNav
