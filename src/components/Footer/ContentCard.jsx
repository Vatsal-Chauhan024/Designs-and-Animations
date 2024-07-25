import React from 'react'

const ContentCard = () => {


  return (
    <>
    <div className='mt-3 text-white flex px-10 justify-around flex-wrap gap-y-6 gap-x-8 '>
      <div className="company">
        <h2 className='font-medium text-base'>Company</h2>
        <hr className='h-[2px] bg-white w-8'/>
        <div className="lists mt-2">
            <ul className='text-gray-400 text-sm flex flex-col gap-1'>
                <li>Home</li>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Get Started</li>
            </ul>
        </div>
      </div>

      <div className="services">
        <h2 className='font-medium text-base'>Services</h2>
        <hr className='h-[2px] bg-white w-8'/>
        <div className="lists mt-2">
            <ul className='text-gray-400 text-sm flex flex-col gap-1'>
                <li>Profile</li>
                <li>My account</li>
                <li>Prefrences</li>
                <li>Purchase</li>
            </ul>
        </div>
      </div>


     

      <div className="account">
        <h2 className='font-medium text-base'>Account</h2>
        <hr className='h-[2px] bg-white w-8'/>
        <div className="lists mt-2">
            <ul className='text-gray-400 text-sm flex flex-col gap-1'>
                <li>Profile</li>
                <li>My account</li>
                <li>Prefrences</li>
                <li>Purchase</li>
            </ul>
        </div>
      </div>

      <div className="courses">
        <h2 className='font-medium text-base'>Courses</h2>
        <hr className='h-[2px] bg-white w-8'/>
        <div className="lists mt-2">
            <ul className='text-gray-400 text-sm flex flex-col gap-1'>
                <li>HTML & CSS</li>
                <li>Javascript</li>
                <li>Photography</li>
                <li>Photoshop</li>
            </ul>
        </div>
      </div>
    </div>

</>
  )
}

export default ContentCard
