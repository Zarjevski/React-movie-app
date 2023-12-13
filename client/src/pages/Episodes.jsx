import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../components/common/Spinner";
import {AiFillStar} from 'react-icons/ai'

const Episodes = () => {
  const { id } = useParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [season, setSeason] = useState(1);
  const [episodes, setEpisodes] = useState([]);
  const { seasons, title, posterUrl } = location.state;
  const navigate = useNavigate()
  const poster = `https://image.tmdb.org/t/p/original/${posterUrl}`;
  const fetchData = async () => {
    try {
      setEpisodes([]);
      setIsLoading(false);
      window.scrollTo(0, 0);
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
                <h2 onClick={()=> navigate(-1)}>{title}</h2>
                <div className="seasons">
                  <h1>עונה:</h1>
                  <div className="season-numbers">
                    <button className="season-btn">1</button>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="episodes">
            {episodes.map((episode, index) => {
              const {overview, still_path, name, vote_average, id, episode_number} = episode
              return (
                <div className="episode" key={index}>
                  <div className="image-container">
                    <img src={`https://image.tmdb.org/t/p/original/${still_path}`} alt={name}  />
                  </div>
                  <div className="episode-info">
                    <h2><span>{episode_number}. </span>{name}</h2>
                    <h3><AiFillStar/>{vote_average.toFixed(1)}</h3>
                    <p>{overview}</p>
                  </div>
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
