import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import MediaCard from "../components/show/MediaCard";
import Spinner from "../components/common/Spinner";
import Modal from "../components/common/Modal";

const Media = ({ videos, images }) => {
  const [data, setData] = useState({ videos, images });
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const posterUrl = ''
  const title = ''
  const { type, id, media } = useParams();
  const navigate = useNavigate();
  let mediaTitle =
    media === "images"
      ? "גלריית תמונות"
      : media === "videos"
      ? "גלריית סרטונים"
      : "";

  return (
    <section className="center media">
      <Modal type={media} />
      <div className="wrapper">
        <header>
          <div className="image-container center">
            <img src={posterUrl} alt={title} onClick={() => navigate(-1)} />
          </div>
          <div>
            <h2 onClick={() => navigate(-1)}>{title}</h2>
            <h1>{mediaTitle}</h1>
          </div>
        </header>
        <div className="media-content">
          <div className={isLoading ? "center" : "grid center"}>
            {isLoading ? (
              <Spinner />
            ) : media === "images" ? (
              data.images.map((item, index) => {
                return (
                  <MediaCard
                    type={media}
                    data={item}
                    key={index}
                    index={index}
                  />
                );
              })
            ) : media === "videos" ? (
              data.videos.map((item, index) => {
                return (
                  <MediaCard
                    type={media}
                    data={item}
                    key={index}
                    index={index}
                  />
                );
              })
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
