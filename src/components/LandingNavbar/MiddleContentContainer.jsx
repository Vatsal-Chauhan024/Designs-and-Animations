import React from 'react'
import {AiFillRead, AiFillSignal, AiFillQqCircle, AiFillWeiboCircle} from 'react-icons/ai'
import data from './data'

const MiddleContentContainer = () => {
  return (
    <div className='w-screen px-2 lg:px-16 mt-16'>

        <h1 className='text-center text-3xl font-medium mb-7 text-gray-700 '>Supporting Partners</h1>
      <div className="partners w-full flex  justify-between items-center flex-col gap-10 md:flex-row md:gap-0">
        <div className="partner1 flex flex-col gap-1 items-center justify-center">
            <AiFillRead className='text-gray-300 text-[100px]'/>
            <span className='text-gray-500'>Alfa Builders</span>
        </div>

        <div className="partner1 flex flex-col gap-1 items-center justify-center">
            <AiFillSignal className='text-gray-400 text-[100px]'/>
            <span className='text-gray-400'>Beta Builders</span>
        </div>

        <div className="partner1 flex flex-col gap-1 items-center justify-center">
            <AiFillQqCircle className='text-gray-400 text-[100px]'/>
            <span className='text-gray-400'>RK Builders</span>
        </div>

        <div className="partner1 flex flex-col gap-1 items-center justify-center">
            <AiFillWeiboCircle className='text-gray-400 text-[100px]'/>
            <span className='text-gray-400'>Prime Builders</span>
        </div>
      </div>

<div className='newDiv flex flex-col  items-start gap-1 mt-10'>
    <span className='text-blue-950 font-bold text-xl'>Some Recommendations</span>
    <span className='text-indigo-800 font-medium text-lg'>Popular Estates</span>
</div>

<div className="cards grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3  gap-x-10 gap-y-16 mt-5 ">
        {
            data.map((data)=>(
                <div key = {data.id}>
                <img src={data.image} alt="error-data" className='rounded-sm '/>
                <div className='flex flex-col px-2 mt-3'>
                <span className='text-indigo-600 font-medium text-xl mb-2'>{data.price}</span>
                <span className='text-gray-700 font-normal text-lg my-1'>{data.title}</span>
                <span className='text-gray-600 font-thin text-justify text-sm'>{data.description}</span>
                <span className='text-gray-800 font-medium text-lg'>{data.location}</span>
                </div>
                </div>
            ))
        }
</div>

    </div>
  )
}

export default MiddleContentContainer
