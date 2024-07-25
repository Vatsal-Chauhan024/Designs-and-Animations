import React from 'react'
import assest1 from '../../images/assest1.jpg'
import {AiOutlineSearch} from 'react-icons/ai'

const StartingContent = () => {
  return (
    <div className='mt-5 gap-10 md:gap-0 md:mt-16 w-full flex flex-col items-center md:flex-row justify-between px-2 lg:px-16'>

        
    <div className='w-fit flex flex-col ml-3'>
      <h1 className='text-5xl font-semibold w-24 text-gray-500'>
        Discover More,
      </h1>
      <h1 className='text-5xl font-medium  text-gray-700'>
        Your Suitable Propery
      </h1>

<div className="span w-72  text-justify mt-8 text-gray-500 ">
      <span className='text-sm '>Experience unparalleled elegance and modern sophistication as you step into our exclusive estate, where every corner is a masterpiece of design and comfort.</span>
    </div>

    <div className="searchInput rounded-sm pr-4 flex items-center justify-center mt-10 ">
        <input type="text" className='bg-gray-200 w-full h-12 px-7 text-sm text-gray-500 outline-none' placeholder='Search your assest'/>
        <AiOutlineSearch className='relative right-7  cursor-pointer text-2xl'/>
    </div>

    <div className="stats mt-5 flex justify-between items-center w-full pr-8">
        <div className="stats1 flex flex-col">
        <span className='text-gray-800 font-semibold text-2xl'>9000 +</span>
        <span className='text-gray-600 text-sm'>Premium Product</span>
        </div>

        <div className="stats2 flex flex-col">
            <span className='text-gray-800 font-semibold text-2xl'>2000 +</span>
            <span className='text-gray-600 text-sm'>Happy Customers</span>
        </div>
    </div>
</div>

      <img src={assest1} alt="error-assest1" className=' w-96 h-[480px] rounded-t-full ' />
    </div>
  )
}

export default StartingContent
