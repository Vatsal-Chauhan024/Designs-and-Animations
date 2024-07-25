import React from 'react'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import Card1 from '../../images/card1.jpg'
import Card2 from '../../images/card2.jpg'
import Card3 from '../../images/card3.jpg'

const Cards = () => {
  return (
    <div className='min-h-screen w-screen flex items-center justify-center bg-purple-600 '>
        <div className='min-h-screen w-screen flex items-center justify-center flex-col lg:flex-row gap-y-5 my-2 gap-x-5 px-6'>

      <div className="oneCard w-72 sm:w-96 h-96 bg-white rounded-md flex-col flex items-center mx-2 sm:mx-0">
                <img src={Card1}  alt="error-Card1" className='w-32 h-32 rounded-full border-2 border-purple-600 border-solid mt-3'/>

                <h3 className='font-semibold text-purple-500 mt-4 text-lg'>David MacLean</h3>
                <div className="stars text-2xl flex gap-2 items-center mt-2">
                <AiFillStar className='text-purple-600'/>
                <AiFillStar className='text-purple-600'/>
                <AiOutlineStar />
                <AiOutlineStar/>
                <AiOutlineStar/>
                </div>

                <p className='text-justify px-8 mt-3 text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem suscipit error magnam ipsa nemo molestias?</p>

                <div className="buttons flex  items-center gap-10 mt-3">
                    <button className='border-2 border-purple-600 border-solid rounded-md text-purple-600 px-4  py-3'>Read More</button>
                    <button className='border-2 border-purple-600 border-solid bg-purple-600 rounded-md text-white px-4  py-3'>Subscribe</button>
                </div>


               
                
      </div>

      <div className="oneCard w-72 sm:w-96 h-96 bg-white rounded-md flex-col flex items-center mx-2 sm:mx-0 ">
                <img src={Card2}  alt="error-Card1" className='w-32 h-32 rounded-full border-2 border-purple-600 border-solid mt-3'/>

                <h3 className='font-semibold text-purple-500 mt-4 text-lg'>Heing Chinee</h3>
                <div className="stars text-2xl flex gap-2 items-center mt-2">
                <AiFillStar className='text-purple-600'/>
                <AiFillStar className='text-purple-600'/>
                <AiFillStar  className='text-purple-600'/>
                <AiFillStar className='text-purple-600'/>
                <AiOutlineStar/>
                </div>

                <p className='text-justify px-8 mt-3 text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem suscipit error magnam ipsa nemo molestias?</p>

                <div className="buttons flex  items-center gap-10 mt-3">
                    <button className='border-2 border-purple-600 border-solid rounded-md text-purple-600 px-4 py-3'>Read More</button>
                    <button className='border-2 border-purple-600 border-solid bg-purple-600 rounded-md text-white px-4  py-3'>Subscribe</button>
                </div>


               
                
      </div>


      <div className="oneCard w-72 sm:w-96 h-96 bg-white rounded-md flex-col flex items-center mx-2 sm:mx-0">
                <img src={Card3}  alt="error-Card1" className='w-32 h-32 rounded-full border-2 border-purple-600 border-solid mt-3'/>

                <h3 className='font-semibold text-purple-500 mt-4 text-lg'>Loius Deacky</h3>
                <div className="stars text-2xl flex gap-2 items-center mt-2">
                <AiFillStar className='text-purple-600'/>
                <AiFillStar className='text-purple-600'/>
                <AiFillStar className='text-purple-600'/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                </div>

                <p className='text-justify px-8 mt-3 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem suscipit error magnam ipsa nemo molestias?</p>

                <div className="buttons flex  items-center gap-10 mt-3">
                    <button className='border-2 border-purple-600 border-solid rounded-md text-purple-600 px-4 py-3'>Read More</button>
                    <button className='border-2 border-purple-600 border-solid bg-purple-600 rounded-md text-white px-4 sm:px-7 py-3'>Subscribe</button>
                </div>


               
                
      </div>
      
      </div>
    </div>
  )
}

export default Cards
