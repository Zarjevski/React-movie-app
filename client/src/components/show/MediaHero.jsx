import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoPlayOutline } from "react-icons/io5";
import { useModalContext } from "../../context/ModalProvider";
import Modal from "../common/Modal";
import Genere from "./Genere";
import GalleryLinks from "./GalleryLinks";

const MediaHero = ({ details, photos, videos, type }) => {
  const id = details.id;
  const title = details.title || details.name;
  const votes = details.vote_average.toFixed(1);
  const trailer = videos[0].video_url;
  const posterUrl = `https://image.tmdb.org/t/p/original/${details.poster_path}`;
  const backdropUrl = `https://image.tmdb.org/t/p/original/${details.backdrop_path}`;
  const { displayModal } = useModalContext();
  return (
    <div
      className="movie-hero"
      style={{ backgroundImage: `url(${backdropUrl})` }}
    >
      <div className="data-container">
        <Modal type={"videos"} />
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
            <div
              className="mobile-play-button"
              onClick={() => displayModal(trailer)}
            >
              <IoPlayOutline />
            </div>
            <img src={posterUrl} alt={title} />
            <iframe
              title={title}
              src={`${trailer}?autoplay=1`}
              allowFullScreen="true"
            ></iframe>
            <GalleryLinks
              type={type}
              id={id}
              title={title}
              posterUrl={posterUrl}
            />
          </div>
          <div className="info">
            <Genere genres={details.genres} />
            <div className="review">{details.overview}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaHero;
