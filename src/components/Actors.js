import React, { useState, useEffect } from "react";
import { getCast, getPoster } from "../api/TMDB";
import Spinner from "./Spinner";

const Actors = ({ id, type }) => {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getActors = async () => {
    setActors(await getCast(type, id));
  };
  useEffect(() => {
    getActors();
    setIsLoading(false)
  }, []);
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className="actors">
      {isLoading ? (
        <Spinner />
      ) : (
        actors.map((person) => {
          const { name, character, profile_path, id } = person;
          const img = getPoster(profile_path);
          return (
            <div className="actor">
              <div className="actor-img-box">
                <img src={img} alt={name} />
              </div>
              <div className="actor-detail">
                <h1>{name}</h1>
                <h2>{character}</h2>
              </div>
            </div>
          );
        })
      )}
    </div>
    </div>
  );
};

export default Actors;
