import React, { useState } from 'react'
import assest2 from '../../images/assests2.jpg'
import { MdVerified } from 'react-icons/md'
import { IoMdArrowDropdownCircle } from 'react-icons/io'
import { GiUnstableOrb } from "react-icons/gi"
import { ImPriceTag } from 'react-icons/im'

const LowerMiddleContainer = () => {

  const [activeDropDown, setActiveDropDown] = useState(null)

  const handleActiveTab = (activeTab) => {
    setActiveDropDown(activeDropDown === activeTab ? null : activeTab)
  }

  return (
    <div>
      <div className="mainContainer flex justify-between px-2 lg:px-16 mt-16 flex-col-reverse md:flex-row items-center gap-8">

      <img src={assest2} alt="error-assest2" className='w-96 h-[480px] rounded-t-full' />

        <div className=' flex flex-col justify-top items-start md:items-end md:w-1/2 px-16 md:px-0'>
          <div className='flex flex-col'>
            <span className='text-2xl text-gray-500 font-semibold flex md:justify-end'>Our Values</span>
            <span className='flex justify-end text-gray-700 text-2xl'>Values we give to you</span>
          </div>

          <div className="span  text-justify mt-8 text-gray-500 ">
            <span className='text-xs sm:text-sm'>Experience unparalleled elegance and modern sophistication as you step into our exclusive estate, where every corner is a masterpiece of design and comfort.</span>
          </div>

          <div className='flex flex-col w-full  mt-8'>
            <div className="dropdowns w-full bg-gray-200 rounded-sm px-4 h-14 flex items-center justify-between mt-4">
              <MdVerified className='text-blue-600 text-xl' />
              <div className="text-sm">Best Assured Recommendations </div>
              <IoMdArrowDropdownCircle className='text-xl text-gray-500 cursor-pointer focus:text-black' onClick={() => handleActiveTab("assured")} />
            </div>
            {activeDropDown === "assured" && (
              <p className='h-fit w-full py-2 px-2 text-justify text-sm rounded-sm bg-gray-50 shadow-lg mt-1'>Assured: confident, bold, and authoritative. Ensure your financial future with trusted recommendations, Trust us!!!</p>
            )
            }

            <div className="dropdowns w-full bg-gray-200 rounded-sm px-4 h-14 flex items-center justify-between mt-7">
              <GiUnstableOrb className='text-indigo-800 text-xl' />
              <div className="text-sm">Prevent Unstable Prices </div>
              <IoMdArrowDropdownCircle className='text-xl text-gray-500 cursor-pointer focus:text-black' onClick={() => handleActiveTab("unstable")} />
            </div>
            {activeDropDown === "unstable" && (
              <p className='h-fit w-full py-2 px-2 text-justify text-sm rounded-sm bg-gray-50 shadow-lg mt-1'>Prevent Unstable Prices: Stay ahead of market volatility with our expert recommendations and strategies. Trust us to safeguard your financial future.</p>
            )
            }

            <div className="dropdowns w-full bg-gray-200 rounded-sm px-4 h-14 flex items-center justify-between mt-7">
              <ImPriceTag className='text-blue-600 text-xl' />
              <div className="text-sm">Best Price on Market </div>
              <IoMdArrowDropdownCircle className='text-xl text-gray-500 cursor-pointer focus:text-black' onClick={() => handleActiveTab('price')} />
            </div>
            {activeDropDown === "price" && (
              <p className='h-fit w-full py-2 px-2 text-justify text-sm rounded-sm bg-gray-50 shadow-lg mt-1'>Prevent Unstable Prices: Stay ahead of market volatility with our expert recommendations and strategies. Trust us to safeguard your financial future.</p>
            )
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default LowerMiddleContainer
