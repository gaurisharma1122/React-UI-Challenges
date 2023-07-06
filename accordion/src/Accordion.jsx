import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'

const Accordion = ({ index, title, content, activeIndex, setActiveIndex }) => {
  return (
    <div className='accordion'>
      <div>
        <h2>{title}</h2>
        <AiOutlinePlusCircle onClick={() => setActiveIndex(index)} />
      </div>
      {
        activeIndex === index && <p>{content}</p>
      }

    </div>
  )
}

export default Accordion