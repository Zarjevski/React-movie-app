import React from "react";
import { useNavigate } from "react-router-dom";
import noMovie from '../../assets/noMovie.png'

const Card = ({id, imgSrc, title, type}) => {
  const navigate = useNavigate();
  // instead of null make a placeholder img
  const img = imgSrc ? `https://image.tmdb.org/t/p/original/${imgSrc}` : noMovie 
  let path = ""
  if (type === "tv") {
    path = `/tv/series/${id}`
  } else {
    path = `/movie/${id}`
  }
  return (
    <div className="card" onClick={() => navigate(path)}>
      <img src={img} alt="תמונה" />
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
