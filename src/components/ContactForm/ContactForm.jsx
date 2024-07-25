import React from 'react'
import LeftSideContainer from './LeftSideContainer'
import CenterDiv from './CenterDiv'
import RightSideContainer from './RightSideContainer'

const ContactForm = () => {
  return (
    <>
    <div className="main w-screen h-screen flex justify-center items-center flex-col">
    <h1 className='text-purple-400 text-center mt-[-20px] font-medium text-3xl'>Contact Us</h1>
        <div className="subMain min-h-fit w-5/6 pb-7 shadow-lg rounded-md bg-white flex flex-col lg:flex-row">
            <LeftSideContainer/>
            <CenterDiv/>
            <RightSideContainer/>
        </div>
    </div>
    </>
  )
}

export default ContactForm
