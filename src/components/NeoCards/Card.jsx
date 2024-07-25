import React from 'react'
import {AiOutlineLeft} from 'react-icons/ai'
import {BsThreeDotsVertical, BsFacebook, BsYoutube, BsInstagram, BsTwitter} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'
import {HiShare} from 'react-icons/hi'
import Owner from "../../images/man.jpeg"

const Card = () => {
  return (
    <div>
      <div className='w-72 sm:w-80 h-[440px] bg-gray-300 rounded-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        <div className="arrows pt-3 w-full flex justify-between px-5">
            <AiOutlineLeft className='text-gray-700'/>
            <BsThreeDotsVertical className='text-gray-700'/>
        </div>

        <div className="outImage flex items-center justify-center">
            <div className="innerImage pt-8 bg-white rounded-full h-36 w-36 flex justify-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ">
            <img src={Owner} alt="error-alt" className='relative bottom-6 rounded-full h-32 w-32'/>
            </div>
        </div>

        <div className="belowImageContainer flex flex-col items-center justify-center mt-3 ">
                <h2 className='text-black text-2xl font-normal'>Web Developer</h2>
                <span className='text-gray-500 text-sm font-normal'>Designer & Developer</span>

                <div className="logos text-3xl flex items-center justify-center gap-8 mt-3">
                    <BsFacebook className='text-blue-600 cursor-pointer '/>
                    <BsInstagram className='text-pink-600 cursor-pointer '/>
                    <BsYoutube className='text-red-600 cursor-pointer '/>
                    <BsTwitter className='text-black cursor-pointer '/>
                </div>

                <div className="button flex items-center justify-center gap-4 mt-5">
                    <button className='px-4 py-6 text-black tracking-wide bg-gray-100 h-7 w-fit flex  items-center justify-center rounded-sm hover:bg-gray-200'>Message</button>
                    <button className='px-4 py-6 text-black tracking-wide bg-gray-100 h-7 w-fit flex  items-center justify-center rounded-sm hover:bg-gray-200'>Subscribe</button>
                </div>

            <div className="cardFooter flex items-center justify-center mt-5 gap-4">
                <div className="heart flex gap-1 items-center justify-center">
                <AiFillHeart className='text-white text-xl cursor-pointer hover:text-red-600'/><span>20.8k</span>
                </div>
                <div className='h-7 w-[2px] bg-black rounded-sm'></div>

                <div className="comment flex gap-1 items-center justify-center">
                <FaComment className='text-white text-xl cursor-pointer hover:text-indigo-500'/><span>10.1k</span>
                </div>
                <div className='h-7 w-[2px] bg-black rounded-sm'></div>

                <div className="share flex gap-1 items-center justify-center">
                <HiShare className='text-white text-xl cursor-pointer hover:text-gray-800'/><span>5.0k</span>
                </div>
            </div>

        </div>

      </div>
    </div>
  )
}

export default Card
