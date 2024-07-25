import React from 'react'
import assests3 from '../../images/assets3.jpg'
import gridData from './contact'

const ContactUs = () => {
  return (
    <div>
      <div className="MainContact flex justify-between px-2 lg:px-16 mt-16 flex-col md:flex-row items-center gap-8">
        <div className='w-full md:w-1/2 flex  flex-col px-16 md:px-0'>
            <div className="leftHeadingSpan flex flex-col">
                <span className='text-blue-800 font-medium text-xl'>Contact Us</span>
                <span className='font-normal text-lg'>Feel Free to Reach Us</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-x-5 gap-y-16 mt-6 items-center w-full">
                    {
                        gridData.map((data)=>(
                            <div key = {data.id} className=' py-3  shadow-lg rounded-sm flex flex-col items-center gap-10 md:gap-3 '>
                                <div className="icons-text w-full flex gap-6 items-center">
                            <span className='text-2xl text-blue-600  rounded-sm p-2'>{data.icon}</span>
                            <div className="span flex flex-col">
                            <span className='font-semibold text-base'>{data.title}</span>
                            <span className='text-xs sm:text-sm '>{data.content}</span>
                            </div>
                                </div>
                           <button className='text-blue-800 px-3 py-1 bg-blue-50 w-11/12 outline-none text-base'>{data.button}</button>
                            </div>
                        ))
                    }               
            </div>
        </div>
        <img src={assests3} alt="error-assests3" className='w-96 h-[440px] rounded-t-full '/>
      </div>
    </div>
  )
}

export default ContactUs
