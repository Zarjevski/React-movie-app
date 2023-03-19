import React from "react";
import { usePopular, getPoster } from "../api/TMDB";
import { useNavigate } from "react-router-dom";

const Slideshow = () => {
  const navigate = useNavigate()
  const [movieIndex,setMovieIndex] = React.useState(0)
  const { data, isLoading, error } = usePopular();
  const buttonFunctions = {
    increase: (movieIndex) => {
      if (movieIndex === 3) {
        setMovieIndex(0)
      }
      setMovieIndex(movieIndex + 1)
    },
    decrease: (movieIndex)=> {
      if(movieIndex === 0){
        setMovieIndex(3)
      }
      setMovieIndex(movieIndex - 1)
    }
  }
  const smallArray = data ? data[0].results.slice(0, 3) : null;
  console.log(smallArray);
  const image = smallArray? getPoster(smallArray[movieIndex].backdrop_path) : null;
  const movieId = smallArray ?smallArray[movieIndex].id : null;
  return (
    <div className="slideshow">
      <div style={{ backgroundImage: `url(${image})` }} className="image-container">
        <button>צפו עכשיו</button>
        <button onClick={()=> navigate(`/movie/${movieId}`)}>ראו עוד</button>
      </div>
      <div className="overlay">
        <button onClick={()=> buttonFunctions.increase()}></button>
        <button onClick={()=> buttonFunctions.decrease()}></button>
      </div>
    </div>
  );
};

export default Slideshow;
