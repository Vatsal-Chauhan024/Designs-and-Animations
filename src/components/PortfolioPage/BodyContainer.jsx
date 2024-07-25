import React from 'react'
import Owner from "../../images/blackman.jpg"

const BodyContainer = () => {
  return (
    <>
    <div className='text-white relative  flex flex-col-reverse md:flex-row justify-between  items-center top-8 md:top-32 lg:top-20'>
      <div className="relative spans flex flex-col w-full h-fit items-center md:items-start top-5">
      <span className='font-bold text-5xl mb-2'>Hello,</span>
      <span className='font-bold text-xl'>It's Me <span className='text-red-600'>Web Developer</span></span>
      <p className='text-gray-200 mt-5'>I am passionate Web Developer and I make attractive and responsive UI, you can reach me out on Github.</p>
      <button className='bg-white px-3 py-2 rounded-md text-black w-fit mt-7 hover:bg-gray-100'>Hire me</button>
      </div>
      <div className="rightImage">
        <img src={Owner} alt="error-owner" className='relative w-[450px] md:w-[950px]  lg:top-0'/>
      </div>
    </div>
    </>
  )
}

export default BodyContainer
