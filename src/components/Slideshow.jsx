import React, { useEffect, useState } from "react";
import { getData, getPoster, getVideos } from "../api/TMDB";
import { useNavigate } from "react-router-dom";
import Skeleton from "./Skeleton";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useModalContext } from "../context/ModalProvider";

const Slideshow = () => {
  const [isLoading, setIsLoading] = useState(true); // loading state
  const [error, setError] = useState(false); // if loading data fails
  const [movieIndex, setMovieIndex] = useState(0); // array index for the slides
  const [movies, setMovies] = useState([]); // data array
  const [trailer, setTrailer] = useState("");
  const image = getPoster(movies[movieIndex]?.backdrop_path);
  const type = "movie";
  const navigate = useNavigate();
  const { displayModal } = useModalContext();
  let smallArray = []
  const fetchMovies = async () => {
    try {
      const moviesData = await getData("/movie/popular");
      smallArray = await moviesData.slice(0, 5);
      setMovies(smallArray);
      setIsLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  const getTrailer = async () => {
    try {
      const id = movies[movieIndex].id
      console.log(id);
      setTrailer(await getVideos(id, type));
    } catch (error) {
      setError(true)
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  // useEffect(() => {
  //   getTrailer();
  // }, [movieIndex]);
  useEffect(() => {
    if(smallArray.length > 1) {
      const increaseIndex = setTimeout(() => {
        setMovieIndex((prevIndex) => {
          if (prevIndex === 4) {
            return (prevIndex = 0);
          } else {
            return prevIndex + 1;
          }
        });
      }, 15000);
      return () => clearTimeout(increaseIndex);
    }
  }, [movieIndex]);
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
  };
  // return jsx
  return (
    <div className="slideshow">
      {isLoading ? (
        <Skeleton height={"100%"} width={"100%"} />
      ) : error || smallArray.length > 1 ? (
        <h1>there is an error</h1>
      ) : (
        <>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="image-container"
          >
            <button onClick={() => displayModal(trailer)}>טריילר</button>
            <button onClick={() => navigate(`/film/${movies[movieIndex].id}`)}>
              ראו עוד
            </button>
          </div>
          <div className="slideshow-overlay">
            <button onClick={() => buttonFunctions.increase()}>
              <AiOutlineRight />
            </button>
            {/* <img src={} alt="logo" /> */}
            <button onClick={() => buttonFunctions.decrease()}>
              <AiOutlineLeft />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;
