import React, { useEffect, useState } from "react";
import { usePopular, getPoster, getMedia } from "../api/TMDB";
import { useNavigate } from "react-router-dom";
import Skeleton from "./Skeleton";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Slideshow = () => {
  const navigate = useNavigate();
  const [movieIndex, setMovieIndex] = useState(0);
  const { data, isLoading, error } = usePopular();
  // auto increment index
  useEffect(() => {
    setTimeout(() => {
      if (movieIndex === 2) {
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
  const smallArray = data ? data[0].results.slice(0, 3) : null;
  const movieMedia = smallArray ? getMedia(smallArray[movieIndex].id) : null
  const image = smallArray
    ? getPoster(smallArray[movieIndex].backdrop_path)
    : null;
  const movieId = smallArray ? smallArray[movieIndex].id : null;
  // return jsx
  return (
    <div className="slideshow">
      {isLoading ? (
        <Skeleton height={"100%"} />
      ) : error ? (
        <h1>there is an error</h1>
      ) : (
        <>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="image-container"
          >
            <button onClick={() => buttonFunctions.openModal()}>
              צפו עכשיו
            </button>
            <button onClick={() => navigate(`/movie/${movieId}`)}>
              ראו עוד
            </button>
          </div>
          <div className="slideshow-overlay">
            <button onClick={() => buttonFunctions.increase()}>
              <AiOutlineRight />
            </button>
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
