import React from 'react'
import {BsFlower2, BsFacebook, BsTwitter, BsInstagram, BsYoutube, BsLinkedin} from 'react-icons/bs'
import ContentCard from './ContentCard'


const Footer = () => {
  return (
    <>

      <div className="blueBg bg-blue min-h-[350px] w-screen absolute bottom-0 bg-blue-950">
        <div className="mainHeadings flex flex-col justify-between items-center px-10 pt-10 md:flex-row">
       <div className="leftHeading flex items-center">
        <BsFlower2 className='text-2xl text-white'/> <span className='text-2xl text-white'>Coding Lab</span>
       </div>
       <div className="rightIcons text-xl flex gap-4 items-center mt-1">
        <div className="blue bg-blue-500 h-9 w-9 flex items-center justify-center rounded-full">
        <BsFacebook className='text-white'/>
            </div>
            <div className="blue bg-blue-500 h-9 w-9 flex items-center justify-center rounded-full">
        <BsTwitter className='text-white '/>
            </div>
            <div className="blue bg-pink-500 h-9 w-9 flex items-center justify-center rounded-full">
        <BsInstagram className='text-white '/>
            </div>
            <div className="blue bg-red-500 h-9 w-9 flex items-center justify-center rounded-full">
        <BsYoutube className='text-white '/>
            </div>
            <div className="blue bg-blue-500 h-9 w-9 flex items-center justify-center rounded-full">
        <BsLinkedin className='text-white '/>
            </div>
       </div>
       </div>
       <hr  className='w-screen h-[2px] mt-3 bg-gray-600 border-none'/>
        

        <ContentCard/>

      </div>
    </>

  )
}

export default Footer
