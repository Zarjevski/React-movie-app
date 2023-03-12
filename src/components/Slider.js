import React from 'react'
import Card from './Card';

const Slider = ({data}) => {
  return (
    <div className='slider'>{data.map((card => {
        return (
            <Card/>
        )
    }))}</div>
  )
}

export default Slider