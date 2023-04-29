import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getById, getData, getVideos } from "../api/TMDB";
import Spinner from "../components/Spinner";
import Slider from "../components/Slider";
import Actors from "../components/Actors";
import MediaHero from "../components/MediaHero";
import GoToEpisodes from "../components/GoToEpisodes";

const Movie = ({ type }) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [trailer, setTrailer] = useState("");
  const [similar, setSimilar] = useState([]);
  const fetchMovie = async () => {
    try {
      setData(await getById(type, id));
      setSimilar(await getData(`/${type}/${id}/similar`));
      setTrailer(await getVideos(id, type));
      setIsLoading(false);
      window.scrollTo(0, 0);
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
          <MediaHero
            votes={data.vote_average}
            title={data.title || data.name}
            genres={data.genres}
            overview={data.overview}
            trailer={trailer}
            poster={data.poster_path}
            backdrop={data.backdrop_path}
            type={type}
            id={id}
          />
          <div className="wrapper">
            {type === "tv" ? (
              <GoToEpisodes data={data}/>
            ) : null}
            {/* <Actors type={type} id={id} /> */}
            {similar.length < 1 ? null : (
              <div className="similar-movies">
                <Slider
                  data={similar}
                  heading={"סרטים דומים"}
                  path={`/${type}/${data.id}/similar`}
                  type={type}
                />
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Movie;
