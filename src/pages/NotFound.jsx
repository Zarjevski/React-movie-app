import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <main>
      <div className='not-found-msg'>
      <h1>הדף המבוקש אינו נמצא.</h1>
      <button onClick={()=> navigate(-1)}>חזרה</button>
      </div>
    </main>
  )
}

export default NotFound