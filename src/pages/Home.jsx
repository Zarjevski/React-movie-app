import React, { useState, useEffect } from "react";
import Slideshow from "../components/Slideshow";
import Slider from "../components/Slider";
import { getData } from "../api/TMDB";
import Spinner from "../components/Spinner";
import Modal from '../components/Modal'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularTv, setPopularTv] = useState([]);
  const fetchData = async () => {
    try {
      setPopularMovies(await getData("/movie/upcoming"));
      setPopularTv(await getData("/tv/popular"));
      setTopRatedMovies(await getData("/tv/top_rated"));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main>
      <Modal/>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="wrapper">
          <Slideshow />
          <Slider
            data={popularMovies}
            heading={"סרטים חדשים"}
            path={"/movie/popular"}
          />
          <Slider
            data={popularTv}
            heading={"סדרות פופולריות"}
            path={"/tv/popular"}
            type={"tv"}
          />
          <Slider
            data={topRatedMovies}
            heading={"המדורגים ביותר"}
            path={"/movie/top_rated"}
            type={'tv'}
          />
        </div>
      )}
    </main>
  );
};

export default Home;
