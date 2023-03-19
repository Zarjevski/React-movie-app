import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Collection from "../pages/Collection";

const Body = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movie" element={<Movie />} />
        <Route path="/collection/:category" element={<Collection />} />
    </Routes>
  )
}

export default Body