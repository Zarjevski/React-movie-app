import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Collection from "../pages/Collection";
import NotFound from '../pages/NotFound';

const Body = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movie" element={<Movie />} />
        <Route path="/collection/:category" element={<Collection />} />
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default Body