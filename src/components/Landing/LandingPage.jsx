import React, { useState } from 'react'
import Background2 from "../../images/background2.jpg"
import { AiFillInfoCircle } from "react-icons/ai"
import Verical from './Verical'
import { Helmet } from "react-helmet";

const LandingPage = () => {
  const [show, setShow] = useState(false)
  const handleToggle = () => {
    setShow(!show)
  }

  return (
    <>

      <Helmet>
      <meta
      name="description"
      content="Landing Page"
     
      
    /> 
      </Helmet>

      <img src={Background2} alt="error-background2" className='w-full h-screen bg-center bg-contain absolute opacity-50 z-0 ' />
      {
        show ? <div className='h-screen w-screen absolute'><Verical onClick={handleToggle} /></div> :
          <div className="mainSection absolute z-50 w-full h-screen lg:block">
            <div className="navbar bg-gray-900 h-24 text-white  flex items-center justify-between px-7">
              <div className="leftNavbar text-2xl">Web Development</div>
              <div className="rightNavbar">

                <div className="box h-7 w-11 relative bg-white cursor-pointer lg:hidden" onClick={handleToggle} >
                  <span className='h-1 w-4/5 left-1 bg-gray-600 absolute top-1'></span>
                  <span className='h-1 w-4/5 left-1 bg-gray-600 absolute top-3'></span>
                  <span className='h-1 w-4/5 left-1 bg-gray-600 absolute top-5'></span>
                </div>

                <ul className='list items items-center gap-6 hidden lg:flex'>
                  <li className='itemName cursor-pointer hover:text-gray-300 text-lg'>Home</li>
                  <li className='itemName cursor-pointer hover:text-gray-300 text-lg'>About</li>
                  <li className='itemName cursor-pointer hover:text-gray-300 text-lg'>Service</li>
                  <li className='itemName cursor-pointer hover:text-gray-300 text-lg'>Contact</li>
                  <li className='itemName cursor-pointer hover:text-gray-300 text-lg'>Feedback</li>
                  <AiFillInfoCircle className='text-xl cursor-pointer hover:text-gray-300' />
                </ul>
              </div>
            </div>

            <div className="centerContent bg-transparent  text-blue-950  h-4/5 font-bold flex  flex-col justify-center items-center text-center">
              <h3 className='pb-3 text-5xl'>Create Landing Page</h3>
              <h3 className='text-5xl'>Pure Tailwind and React</h3>
              <div className="buttons mt-4 flex gap-11">
                <button className='bg-transparent text-blue-950 border-2 border-blue-950 px-10 h-14 rounded-md'>Learn More</button>
                <button className='bg-black text-white border-2 border-black px-10 h-14 rounded-md'>Subscribe</button>

              </div>
            </div>
          </div>

      }
    </>
  )
}

export default LandingPage
