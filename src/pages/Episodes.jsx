import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getPoster, getSeasonDetails } from "../api/TMDB";
import Spinner from "../components/Spinner";

const Episodes = () => {
  const { id } = useParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [season, setSeason] = useState(1);
  const [episodes, setEpisodes] = useState([]);
  const { seasons, title, posterUrl } = location.state;
  const poster = getPoster(posterUrl)
  const fetchData = async () => {
    try {
      const response = await getSeasonDetails(id, season);
      setEpisodes(await response.episodes);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [season]);
  return (
    <section className="center episodes-page">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="wrapper">
          <header>
            <div className="info">
              <div className="image-container center">
                <img src={poster} alt={title} />
              </div>
              <div className="tv-title">
                <h1>{title}</h1>
              </div>
            </div>
            <div className="seasons">
              <h1>עונה:</h1>
              <div className="season-numbers"></div>
            </div>
          </header>
          <div className="episodes">
            {episodes.map((episode, index) => {
              return (
                <div className="episode" key={index}>
                  episode
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Episodes;
