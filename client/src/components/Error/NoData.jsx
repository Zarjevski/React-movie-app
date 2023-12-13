import React from "react";
import { useNavigate } from "react-router-dom";
import { TbMovieOff } from "react-icons/tb";

const NoData = () => {
  const navigate = useNavigate();
  return (
    <div className="no-data">
      <TbMovieOff className="reel-icon" />
      <h1>מצטערים, לא הצלחנו למצוא סרטים.</h1>
      <div>
        <button className="no-result-btn" onClick={() => navigate("/")}>
          לדף הבית
        </button>
        <button>נסה שנית</button>
      </div>
    </div>
  );
};

export default NoData;
