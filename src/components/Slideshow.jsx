import React, { useEffect, useState } from "react";
import { getData, getPoster, getMedia } from "../api/TMDB";
import { useNavigate } from "react-router-dom";
import Skeleton from "./Skeleton";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Slideshow = () => {
  const [isLoading, setIsLoading] = useState(true); // loading state
  const [error, setError] = useState(false); // if loading data fails
  const [movieIndex, setMovieIndex] = useState(0); // array index for the slides
  const [movies, setMovies] = useState([]); // data array
  const navigate = useNavigate();
  const image = getPoster(movies[movieIndex]?.backdrop_path);
  const fetchMovies = async () => {
    try {
      const moviesData = await getData("/movie/popular");
      const smallArray = await moviesData.slice(0, 5);
      setMovies(smallArray);
      setIsLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setMovieIndex((prevIndex) => {
        if (prevIndex === 4) {
          return (prevIndex = 0);
        } else {
          return prevIndex + 1;
        }
      });
    }, 15000);
  }, [setMovieIndex]);
  // button functions
  const buttonFunctions = {
    increase: () => {
      setMovieIndex((prevIndex) => {
        if (prevIndex === 4) {
          return (prevIndex = 0);
        } else {
          return prevIndex + 1;
        }
      });
    },
    decrease: () => {
      setMovieIndex((prevIndex) => {
        if (prevIndex === 0) {
          return (prevIndex = 4);
        } else {
          return prevIndex - 1;
        }
      });
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
