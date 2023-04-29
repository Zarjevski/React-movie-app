import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getMedia } from "../api/TMDB";
import MediaCard from "../components/MediaCard";
import Spinner from "../components/Spinner";
import Modal from "../components/Modal";

const Media = () => {
  const [data, setData] = useState([]);
  const mediaArray = data.slice(0,9)
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { posterUrl, title } = location.state;
  const { type, id, media } = useParams();
  const navigate = useNavigate()
  let mediaTitle =
    media === "images"
      ? "גלריית תמונות"
      : media === "videos"
      ? "גלריית סרטונים"
      : "";
  const fetchData = async () => {
    try {
      const response = await getMedia(type, id, media);
      if (media === "videos") {
        setData(response.results);
        setIsLoading(false);
      } else {
        setData(response.backdrops)
        setIsLoading(false)
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="center media">
      <Modal type={media}/>
      <div className="wrapper">
        <header>
          <div className="image-container center">
            <img src={posterUrl} alt={title} onClick={()=> navigate(-1)}/>
          </div>
          <div>
            <h2 onClick={()=> navigate(-1)}>{title}</h2>
            <h1>{mediaTitle}</h1>
          </div>
        </header>
        <div className="media-content">
          <div className={isLoading ? "center" : "grid center"}>
            {isLoading ? (
              <Spinner />
            ) : (
              mediaArray.map((item, index) => {
                return <MediaCard type={media} data={item} key={index} index={index}/>;
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
