import React from 'react'
import {BiLogoPlayStore} from 'react-icons/bi'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='mt-5 '>
        <span className='flex items-center justify-center text-2xl text-gray-600 font-thin'>

      CopyRights Reserved  <AiOutlineCopyrightCircle className='px-1'/> by Vats Tech <BiLogoPlayStore className='ml-2'/>
        </span>
    </div>
  )
}

export default Footer
