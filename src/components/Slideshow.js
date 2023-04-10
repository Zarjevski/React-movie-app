import React, { useEffect, useState } from "react";
import { getData, getPoster, getMedia } from "../api/TMDB";
import { useNavigate } from "react-router-dom";
import Skeleton from "./Skeleton";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Slideshow = () => {
  // constants
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movieIndex, setMovieIndex] = useState(0);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const image =
  movies.length > 0 ? getPoster(movies[movieIndex].backdrop_path) : "";
  const fetchMovies = async () => {
    try {
      const moviesData = await getData("/movie/popular");
      const smallArray = await moviesData.slice(0, 5);
      setMovies(smallArray);
      setIsLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  // useEffects
  useEffect(() => {
    fetchMovies();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      if (movieIndex === 4) {
        setMovieIndex(0);
      } else {
        setMovieIndex(movieIndex + 1);
      }
    }, 7000);
  }, [movieIndex]);
  // button functions
  const buttonFunctions = {
    increase: () => {
      if (movieIndex === 2) {
        setMovieIndex(0);
      } else {
        setMovieIndex(movieIndex + 1);
        console.log(movieIndex);
      }
    },
    decrease: () => {
      if (movieIndex === 0) {
        setMovieIndex(2);
      } else {
        setMovieIndex(movieIndex - 1);
      }
    },
    openModal: () => {
      console.log("open modal");
    },
  };
  // return jsx
  return (
    <div className="slideshow">
      {isLoading ? (
        <Skeleton height={"100%"} width={"100%"} />
      ) : error ? (
        <h1>there is an error</h1>
      ) : (
        <>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="image-container"
          >
            <button onClick={() => buttonFunctions.openModal()}>טריילר</button>
            <button onClick={() => navigate(`/film/${movies[movieIndex].id}`)}>
              ראו עוד
            </button>
          </div>
          <div className="slideshow-overlay">
            <button onClick={() => buttonFunctions.increase()}>
              <AiOutlineRight />
            </button>
            <img src="" alt="logo" />
            <button onClick={() => buttonFunctions.decrease()}>
              <AiOutlineLeft />
            </button>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Slideshow;
