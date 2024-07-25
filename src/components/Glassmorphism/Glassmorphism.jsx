import React from 'react'
import Box from './Box'

const Glassmorphism = () => {
  return (
    <div className='bg-red-400 h-screen w-screen'>
        <div className="ball1 h-[70vh] w-[40vw] rounded-r-full absolute bg-red-300 z-0"></div>
        <div className="ball1 h-[70vh] w-[40vw] rounded-l-full absolute right-0 bottom-0 bg-red-300 z-0"></div>

      <div className='w-screen h-full flex justify-center items-center'>
        <div className='flex items-center justify-center'>
        <Box/>
        </div>
      </div>
    </div>
  )
}

export default Glassmorphism
