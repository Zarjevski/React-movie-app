import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getByID } from "../api/client";
import Spinner from "../components/common/Spinner";
import Slider from "../components/common/Slider";
import MediaHero from "../components/show/MediaHero";
import GoToEpisodes from "../components/show/GoToEpisodes";

const Movie = ({ type }) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [similar, setSimilar] = useState([]);
  const fetchMovie = async () => {
    try {
      const response = await getByID(type, id);
      setData(response);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
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
            details={data.details}
            images={data.photos}
            videos={data.videos}
            type={type}
          />
          <div className="wrapper">
            {type === "tv" ? <GoToEpisodes data={data.details} /> : null}
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
