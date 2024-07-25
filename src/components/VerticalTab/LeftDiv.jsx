import React, { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { LiaBlogSolid } from 'react-icons/lia'
import {FiHelpCircle} from 'react-icons/fi'
import {BiCodeAlt} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'

const LeftDiv = () => {

  const [isActive, setIsActive] = useState('home')

  const handleTab = (tab) => {
    setIsActive(tab)
  }

  return (
    <ul className="mainList flex flex-col gap-14 sm:gap-7 lg:gap-3 ">
      <div
        className={`bgPurple h-9 ${isActive === "home" ? "bg-purple-500" : "bg-white"
          } px-4 flex items-center gap-2 rounded-md cursor-pointer`}
        onClick={() => handleTab("home")}
      >
        <AiFillHome
          className={isActive === "home" ? "text-white text-xl" : "text-purple-500 text-xl"}
        />
        <li className={`itemList ${isActive === "home" ? "text-white" : "text-purple-500"}`}>
          Home
        </li>
      </div>

      <div
        className={`bgPurple h-9 ${isActive === "blogs" ? "bg-purple-500" : "bg-white"
          } px-4 flex items-center gap-2 rounded-md cursor-pointer`}
        onClick={() => handleTab("blogs")}
      >
        <LiaBlogSolid
          className={isActive === "blogs" ? "text-white text-xl" : "text-purple-500 text-xl"}
        />
        <li className={`itemList ${isActive === "blogs" ? "text-white" : "text-purple-500"}`}>
          Blogs
        </li>
      </div>

      <div
        className={`bgPurple h-9 ${isActive === "help" ? "bg-purple-500" : "bg-white"
          } px-4 flex items-center gap-2 rounded-md cursor-pointer`}
        onClick={() => handleTab("help")}
      >
        <FiHelpCircle
          className={isActive === "help" ? "text-white text-xl" : "text-purple-500 text-xl"}
        />
        <li className={`itemList ${isActive === "help" ? "text-white" : "text-purple-500"}`}>
          Help
        </li>
      </div>

      <div
        className={`bgPurple h-9 ${isActive === "code" ? "bg-purple-500" : "bg-white"
          } px-4 flex items-center gap-2 rounded-md cursor-pointer`}
        onClick={() => handleTab("code")}
      >
        <BiCodeAlt
          className={isActive === "code" ? "text-white text-xl" : "text-purple-500 text-xl"}
        />
        <li className={`itemList ${isActive === "code" ? "text-white" : "text-purple-500"}`}>
          Code
        </li>
      </div>

      <div
        className={`bgPurple h-9 ${isActive === "about" ? "bg-purple-500" : "bg-white"
          } px-4 flex items-center gap-2 rounded-md cursor-pointer`}
        onClick={() => handleTab("about")}
      >
        <BsFillPersonFill
          className={isActive === "about" ? "text-white text-xl" : "text-purple-500 text-xl"}
        />
        <li className={`itemList ${isActive === "about" ? "text-white" : "text-purple-500"}`}>
         About
        </li>
      </div>
    
    </ul>
  )
}

export default LeftDiv
