import React from "react";
import { getPoster } from "../api/TMDB";
import { useNavigate } from "react-router-dom";

const Card = ({id, imgSrc, title}) => {
  const navigate = useNavigate();
  // instead of null make a placeholder img
  const img = imgSrc ? getPoster(imgSrc) : null 
  return (
    <div className="card" onClick={() => navigate(`/movie/${id}`)}>
      <img src={img} alt="תמונה" />
      <h4>{title}</h4>
    </div>
  );
};

export default Card;
