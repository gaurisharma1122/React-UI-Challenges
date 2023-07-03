import React, { useState } from 'react'
import Star from './Star'

const StarRating = ({ totalStars, currentRating, setCurrentRating }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <div >
      {
        Array.from({ length: totalStars }).map((_, index) => {
          return (
            <span onClick={() => setCurrentRating(index + 1)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}>
              < Star filled={hoverIndex !== null ? index <= hoverIndex : index < currentRating} />
            </span>
          )
        })
      }
    </div>
  )
}

export default StarRating