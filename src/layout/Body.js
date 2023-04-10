import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Collection from "../pages/Collection";
import NotFound from "../pages/NotFound";

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Collection type={"movie"} />} />
      <Route path="/tv" element={<Collection type={"tv"} />} />
      <Route path="/movie/:category" element={<Collection />} />
      <Route path="/movie/:id/similar" element={<Collection />} />
      <Route path="/tv/:category" element={<Collection />} />
      <Route path="/film/:id" element={<Movie type={"movie"} />} />
      <Route path="/tv/series/:id" element={<Movie type={"tv"} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Body;
