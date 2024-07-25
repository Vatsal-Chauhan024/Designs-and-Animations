import React, { useState } from 'react'
import Man from '../../images/man.jpeg'
import {AiFillYoutube, AiFillInstagram, AiFillTwitterCircle, AiFillFacebook} from 'react-icons/ai'

const FrontCard = () => {


  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip =() =>{
    setIsFlipped(!isFlipped)
  }

  return (
    <>
    {
     isFlipped ? (
      <div className='h-72 w-72 sm:h-96 sm:w-96 border-white bg-gray-200 shadow-lg border-2 border-solid rounded-sm transform scale-100 flex flex-col  items-center gap-3 sm:gap-6 cursor-pointer' onMouseLeave={handleFlip}>
        <img src={Man} alt="error-man" className='rounded-full w-32 h-32 mt-4 border-green-500 border-2 border-solid' />

        <h2 className='text-3xl'>Web Developer</h2>
        <p className=' text-xs text-justify sm:text-base px-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate est rem autem!</p>

        <div className="icons flex items-center gap-3 text-3xl sm:text-4xl text-purple-600">
        <AiFillYoutube/>
        <AiFillInstagram/>
        <AiFillTwitterCircle/>
        <AiFillFacebook/>
        </div>
      </div>  ): (  <div className='h-72 w-72 sm:h-96 sm:w-96 border-white border-2 border-solid rounded-sm transform scale-100 cursor-pointer' onMouseEnter={handleFlip} >
      <img src={Man} alt="error-man" className='' />
    </div>
      )
    }

   
    </>
  )
}

export default FrontCard
