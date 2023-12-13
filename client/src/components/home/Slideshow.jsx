import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Slideshow = ({ featured }) => {
  const [movieIndex, setMovieIndex] = useState(0); // array index for the slides
  const navigate = useNavigate();
  console.log(featured);
  useEffect(() => {
    if (featured.length > 1) {
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
      { featured.length < 1 ? (
        <h1>there is an error</h1>
      ) : (
        <>
          <div
            style={{ backgroundImage: `url(${featured[movieIndex].backdrop_path})` }}
            className="image-container"
          >
            <button
              onClick={() => navigate(`/${featured[movieIndex].type}/${featured[movieIndex].id}`)}
            >
              ראו עוד
            </button>
          </div>
          <div className="slideshow-overlay">
            <button onClick={() => buttonFunctions.increase()}>
              <AiOutlineRight />
            </button>
            <img src={featured[movieIndex].logo_url} alt="logo" className="movie-logo" />
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
