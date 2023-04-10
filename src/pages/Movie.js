import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getById, getPoster, getSimilar, getVideos } from "../api/TMDB";
import {
  AiFillStar,
  AiOutlineVideoCamera,
  AiOutlineCamera,
} from "react-icons/ai";
import Spinner from "../components/Spinner";
import Slider from "../components/Slider";
import Actors from "../components/Actors";

const Movie = ({ type }) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [trailer, setTrailer] = useState("");
  const [similar, setSimilar] = useState([]);
  const posterUrl = getPoster(data?.poster_path);
  const backdrop = getPoster(data?.backdrop_path);
  const fetchMovie = async () => {
    try {
      setData(await getById(type,id));
      setSimilar(await getSimilar(type,id));
      setTrailer( await getVideos(id, type));
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    fetchMovie();
  }, [id]);
  return (
    <section
      className={isLoading ? "center" : "movie"}
      style={{ flexDirection: "column" }}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div
            className="movie-hero"
            style={{ backgroundImage: `url(${backdrop})` }}
          >
            <div className="data-container">
              <div className="wrapper">
                <div className="heading">
                  <h1>{data.title || data.name}</h1>
                  <div className="rating">
                    <h3>{data.vote_average}<span>/10</span></h3>
                    <AiFillStar />
                  </div>
                </div>
                <div className="media-center">
                  <img src={posterUrl} alt={data.title || data.name} />
                  <iframe title={data.title} src={trailer}></iframe>
                  <div className="gallery-links">
                    <div className="photos">
                      <AiOutlineCamera />
                      <h2>תמונות</h2>
                    </div>
                    <div className="videos">
                      <AiOutlineVideoCamera />
                      <h2>וידיאו</h2>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="genres">
                    {data.genres.map((genre) => {
                      const { name } = genre;
                      return <div className="genre">{name}</div>;
                    })}
                  </div>
                  <div className="review">{data.overview}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper">
              {/* <Actors type={type} id={id}/> */}
            <div className="similar-movies">
              <Slider
                data={similar}
                heading={"סרטים דומים"}
                path={`/${type}/${data.id}/similar`}
                type={type}
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Movie;
