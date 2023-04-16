import React from "react";
import { getPoster } from "../api/TMDB";
import {
  AiFillStar,
  AiOutlineVideoCamera,
  AiOutlineCamera,
} from "react-icons/ai";
import { IoPlayOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const MediaHero = ({
  votes,
  title,
  poster,
  backdrop,
  trailer,
  genres,
  overview,
  type,
  id,
}) => {
  const posterUrl = getPoster(poster);
  const backdropUrl = getPoster(backdrop);
  const navigate = useNavigate();
  return (
    <div
      className="movie-hero"
      style={{ backgroundImage: `url(${backdropUrl})` }}
    >
      <div className="data-container">
        <div className="wrapper">
          <div className="heading">
            <h1>{title}</h1>
            <div className="rating">
              <h3>
                {votes}
                <span>/10</span>
              </h3>
              <AiFillStar />
            </div>
          </div>
          <div className="media-center">
            <div className="mobile-play-button">
              <IoPlayOutline />
            </div>
            <img src={posterUrl} alt={title} />
            <iframe title={title} src={trailer}></iframe>
            <div className="gallery-links">
              <div
                className="photos"
                onClick={() => navigate(`/${type}/${id}/images`)}
              >
                <AiOutlineCamera />
                <h2>תמונות</h2>
              </div>
              <div
                className="videos"
                onClick={() => navigate(`/${type}/${id}/videos`)}
              >
                <AiOutlineVideoCamera />
                <h2>וידיאו</h2>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="genres">
              {genres.map((genre, index) => {
                const { name } = genre;
                return (
                  <div className="genre" key={index}>
                    {name}
                  </div>
                );
              })}
            </div>
            <div className="review">{overview}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaHero;
