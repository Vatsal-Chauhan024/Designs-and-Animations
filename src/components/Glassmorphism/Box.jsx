import React from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'

const Box = () => {
    return (
        <div className='w-[83vw] h-[85vh] sm:h-[500px] sm:w-[630px] md:w-[780px] xl:h-[650px] xl:w-[900px] rounded-sm bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 '>
        <div className='flex flex-col items-center justify-around text-xl'>
            <div className="logo mt-3 font-medium ">
                <span>LOGO</span>
            </div>
            <div className="menus mt-3 font-medium ">
                <ul className='menus-ul flex gap-5 text-sm sm:text-lg'>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="button mt-3 flex gap-5 font-thin">
                <button className='login bg-red-500  text-white px-6 h-9 rounded-sm'>Login</button>
                <button className='login bg-red-500 text-white px-6 h-9 rounded-sm'>Sign up</button>
            </div>

        </div>

           <p className='px-8 mt-10 font-semibold text-base sm:text-3xl'>Learn to Enjoy, every moment of your life.</p>

            <p className='paragraph w-full px-8 mt-4 text-justify font-medium text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat saepe a iure, provident vitae itaque atque quo repellat suscipit debitis dolore, cumque tempore quasi eaque, molestias consequuntur illo pariatur reiciendis quod dicta totam non. Iste ut doloremque odio suscipit nostrum assumenda pariatur repellat soluta dolorum.</p>

            <div className="play flex  justify-center items-center mt-10 gap-1 absolute bottom-3 right-5 cursor-pointer text-xl sm:text-3xl">
                Play <AiFillPlayCircle className=' text-indigo-600 outline-none'/>
            </div>


           
        </div>
    )
}

export default Box
