import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Collection from "../pages/Collection";
import Media from "../pages/Media";
import NotFound from "../pages/NotFound";
import Episodes from "../pages/Episodes";

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discover/:type" element={<Collection />} />
      <Route
        path="/movies/category/:category"
        element={<Collection type={"movie"} />}
      />
      <Route
        path="/tv/category/:category"
        element={<Collection type={"tv"} />}
      />
      <Route
        path="/movies/:id/similar"
        element={<Collection type={"movie"} />}
      />
      <Route path="/search/:search" element={<Collection />} />
      <Route path="/movie/:id" element={<Movie type={"movie"} />} />
      <Route path="/tv/series/:id" element={<Movie type={"tv"} />} />
      <Route path="/:type/:id/media/:media_type" element={<Media />} />
      <Route path="/tv/series/:id/episodes" element={<Episodes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Body;
