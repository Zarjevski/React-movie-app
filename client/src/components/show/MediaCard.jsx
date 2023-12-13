import React from "react";
import { useModalContext } from "../../context/ModalProvider";

const MediaCard = ({ type, data, index }) => {
  const { displayModal } = useModalContext();
  const video =
    data.site === "YouTube" ? `https://www.youtube.com/embed/${data.key}` : "";
  const imgURL = data.file_path;
  const toDisplay =
    type === "images"
      ? `https://image.tmdb.org/t/p/original/${imgURL}`
      : type === "videos"
      ? video
      : null;
  return (
    <div className="media-card" onClick={() => displayModal(toDisplay)}>
      {type === "images" ? (
        <img src={toDisplay} alt={index} />
      ) : (
        <iframe src={video} title={index}></iframe>
      )}
    </div>
  );
};

export default MediaCard;
