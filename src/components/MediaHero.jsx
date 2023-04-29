import React from "react";
import { getPoster } from "../api/TMDB";
import {
  AiFillStar,
  AiOutlineVideoCamera,
  AiOutlineCamera,
} from "react-icons/ai";
import { IoPlayOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "../context/ModalProvider";
import Modal from "./Modal";

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
  const {displayModal} = useModalContext()
  return (
    <div
      className="movie-hero"
      style={{ backgroundImage: `url(${backdropUrl})` }}
    >
      <div className="data-container">
        <Modal type={"videos"}/>
        <div className="wrapper">
          <div className="heading">
            <h1>{title}</h1>
            <div className="rating">
              <h3>
                {votes.toFixed(1)}
                <span>/10</span>
              </h3>
              <AiFillStar />
            </div>
          </div>
          <div className="media-center">
            <div className="mobile-play-button" onClick={()=> displayModal(trailer)}>
              <IoPlayOutline />
            </div>
            <img src={posterUrl} alt={title} />
            <iframe title={title} src={trailer} allowFullScreen="true"></iframe>
            <div className="gallery-links">
              <div
                className="photos"
                onClick={() => navigate(`/${type}/${id}/images`, {state: {posterUrl,title}})}
              >
                <AiOutlineCamera />
                <h2>תמונות</h2>
              </div>
              <div
                className="videos"
                onClick={() => navigate(`/${type}/${id}/videos`, {state: {posterUrl,title}})}
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
