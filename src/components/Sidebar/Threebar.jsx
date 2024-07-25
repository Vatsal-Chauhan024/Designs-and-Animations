import React from 'react'

const Threebar = ({onClick}) => {
  return (
    <>
    <div className='pt-6 pl-6'>
    <div className="threeBar h-11 w-11 flex flex-col  rounded-lg cursor-pointer bg-gray-800  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100" onClick={onClick}>
  <hr className='h-3 mt-2 mx-1'/>
  <hr className='h-3 mt-2 mx-1'/>
  <hr className='h-3 mt-2 mx-1'/>
    </div>
    </div>
    </>
  )
}

export default Threebar
