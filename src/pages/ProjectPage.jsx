import React from 'react'
import {FaCommentMedical} from 'react-icons/fa'
import Card from './Cards/Card'

const ProjectPage = () => {
  return (
    <div>
      <div className='w-screen h-screen flex flex-col'>
        <div className='w-screen h-96 flex items-center justify-center'>
            <FaCommentMedical className='text-5xl'/>
        </div>
        <div className="flex w-full items-center justify-center">
            <Card/>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
