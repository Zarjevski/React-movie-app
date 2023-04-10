import React from "react";
import { getPoster } from "../api/TMDB";
import { useNavigate } from "react-router-dom";

const Card = ({id, imgSrc, title, type}) => {
  const navigate = useNavigate();
  // instead of null make a placeholder img
  const img = imgSrc ? getPoster(imgSrc) : null 
  let path = ""
  if (type === "tv") {
    path = `/tv/series/${id}`
  } else {
    path = `/film/${id}`
  }
  return (
    <div className="card" onClick={() => navigate(path)}>
      <img src={img} alt="תמונה" />
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
