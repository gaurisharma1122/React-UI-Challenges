import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Star = ({ filled }) => {
  return (
    <>
      {filled ? <AiFillStar className='star' /> : <AiOutlineStar className='star' />}
    </>
  )
}

export default Star