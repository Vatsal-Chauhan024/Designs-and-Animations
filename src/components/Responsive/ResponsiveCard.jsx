import React from 'react'
import { BsFacebook, BsGithub, BsYoutube, BsInstagram, BsHeartFill, BsFillShareFill } from 'react-icons/bs';
import {FaComments} from 'react-icons/fa'


const ResponsiveCard = () => {
  return (


    <div className='min-w-[100vw] min-h-[100vh] flex justify-center items-center'>



    <div className="mainCard bg-white shadow-2xl w-96 min-h-[384px] rounded-lg overflow-hidden">
          <div className="bluebg h-36 w-full bg-indigo-500">
              <div className="imgDiv pt-16 pl-32">
                <div className='subImgDiv border-2 border-white rounded-full w-32 h-32 '>
                <img src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=600" alt="error-profile-pic" className='h-32 w-32 rounded-full border-2 border-indigo-600'/>
                </div>
              </div>
          </div>

          <div className="spanHeadings mt-16">
            <h2 className='text-center font-medium text-2xl'>Web Developer</h2>
            <h2 className='text-center font-normal text-base'>React and Tailwind CSS</h2>
          </div>

          <div className="icons mt-8 w-full flex justify-between px-20">
            <BsFacebook className='text-3xl text-blue-700 cursor-pointer'/>
            <BsInstagram className='text-3xl text-pink-700 cursor-pointer'/>
            <BsGithub className='text-3xl text-black cursor-pointer'/>
            <BsYoutube className='text-3xl text-red-500 cursor-pointer'/>
          </div>


          <div className="buttons my-8 flex w-full justify-center items-center gap-12">
            <button className='h-10 bg-indigo-500 text-white px-4 rounded-full hover:bg-indigo-400'>Subscribe</button>
            <button className='h-10 bg-indigo-500 text-white px-4 rounded-full hover:bg-indigo-400'>Message</button>
          </div>

          <div className="cardFooter flex items-center justify-center gap-8 mb-7">
            <div className="likes flex gap-2 items-center">
              <BsHeartFill className='text-xl  text-red-500'/> <span className="text">20k</span>
            </div>

            <div className="verticalLine border-[1px] border-gray-500 h-7 mx-[-9px]"></div>

            <div className="likes flex gap-2 items-center">
              <FaComments className='text-xl text-blue-300'/> <span className="text">40k</span>
            </div>

            <div className="verticalLine border-[1px] border-gray-500 h-7 mx-[-9px]"></div>
            <div className="likes flex gap-2 items-center">
              <BsFillShareFill className='text-sm text-black'/> <span className="text">6k</span>
            </div>
          </div>
    </div>
    </div>
  )
}

export default ResponsiveCard

