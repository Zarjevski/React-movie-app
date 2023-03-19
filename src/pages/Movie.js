import React from "react";
import { useParams } from "react-router-dom";
import { useMovieById, getPoster } from "../api/TMDB";
import Spinner from "../components/Spinner";

const Movie = () => {
  const { movie } = useParams();
  const { data, error, isLoading } = useMovieById(movie);
  console.log(data);
  return (
    <section className="center">
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <h1>error</h1>
      ) : (
        <div className="movie-page">
          <img src={getPoster(data[0].poster_path)} alt="poster"/>
          <div className="movie-details">
            <h1>{data[0].title}</h1>
          </div>
        </div>
      )}
    </section>
  );
};

export default Movie;
