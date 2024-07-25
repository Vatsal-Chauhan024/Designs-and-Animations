import React from 'react'
import {RxCross1} from 'react-icons/rx'


const Verical = ({onClick}) => {
  return (
   
      <ul className='listItems'>
        <RxCross1 className='absolute right-6 top-5 text-3xl cursor-pointer' onClick={onClick}/>
        <div className="main flex flex-col justify-center items-center h-screen gap-14  text-2xl">
        <li className='listItem hover:text-gray-600'>Home</li>
        <li className='listItem hover:text-gray-600'>About</li>
        <li className="listItem hover:text-gray-600">Services</li>
        <li className="listItem hover:text-gray-600">Contacts</li>
        <li className="listItem hover:text-gray-600">Feedback</li>
        </div>
      </ul>
  )
}

export default Verical
