import React from 'react'

const BackFlipingComponent = () => {
  return (
<div className='h-80 sm:h-72 w-[350px] sm:min-w-[490px] shadow-md text-white relative z-50 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 cursor-pointer'>
<div className="info my-2">
    <p className='text-xs px-3 font-semibold text-center'>for customer service call us at +91 9783738378</p>
</div>

<div className="blackDiv h-16 bg-black w-full"></div>

<div className="cvv mt-7 flex items-center ">
    <div className="whiteBg w-[85%] bg-gray-300 h-12 flex flex-col gap-2 items-center">
      <div className='h-1 bg-gray-400 rounded-full border-none w-full'></div>
      <div className='h-1 bg-gray-400 rounded-full border-none w-full'></div>
      <div className='h-1 bg-gray-400 rounded-full border-none w-full'></div>
      <div className='h-1 bg-gray-400 rounded-full border-none w-full'></div>
    </div><span className='bg-white text-black h-7 flex items-center px-2 rounded-r-md '>005</span>
</div>

<div className="loremInfo w-[350px] sm:w-[460px] mt-6">
    <p className='text-sm px-2 text-justify flex-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim impedit nesciunt soluta eos quis, cum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit.</p>
</div>
</div>
  )
}

export default BackFlipingComponent
