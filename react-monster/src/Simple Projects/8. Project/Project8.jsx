import React from 'react'
import Accordions from './Accordions'
import { accordionData } from './utils/content'

const Project8 = () => {
  return (
    <div className='accordion'>
      {accordionData.map(({title, content}) => (
        <Accordions title={title} content={content}/>
      ))}
    </div>
  )
}

export default Project8