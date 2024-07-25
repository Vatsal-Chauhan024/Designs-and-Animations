import React from 'react'
import LeftDiv from './LeftDiv'
import RightDiv from './RightDiv'

const VerticalTab = () => {
  return (
    <div className='min-h-screen min-w-screen flex items-center justify-center'>
      <div className=" whiteDiv bg-white shadow-lg rounded-md pb-9 w-5/6">
        <div className="centerDiv mt-8 mx-6">
        <h1 className='ml-1 mb-5 text-xl font-medium'>Tailwind Vertical Tabs.</h1>

        <div className="flexBoxes flex flex-col md:flex-row gap-20">
            <LeftDiv/>
            <RightDiv/>
        </div>
        </div>
      </div>
    </div>
  )
}
 
export default VerticalTab
