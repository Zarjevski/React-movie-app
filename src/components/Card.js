import React from 'react'
import { getPoster } from '../api/TMDB'

const Card = ({imgSrc}) => {
  const poster = imgSrc? getPoster(imgSrc) : null
  console.log(poster);
  return (
    <div className='card'>
      <img src={poster} alt="תמונה"/>
    </div>
  )
}

export default Card