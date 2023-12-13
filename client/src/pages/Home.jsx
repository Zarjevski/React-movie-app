import React, { useState, useEffect } from "react";
import { getByCategory, getFeatured } from "../api/client";
import Slideshow from "../components/home/Slideshow";
import Slider from "../components/common/Slider";
import Spinner from "../components/common/Spinner";
import NoData from "../components/Error/NoData";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularTv, setPopularTv] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        setUpcomingMovies(await getByCategory("movie", "upcoming"));
        setPopularTv(await getByCategory("tv", "popular"));
        setTopRatedMovies(await getByCategory("tv", "top_rated"));
        setFeatured(await getFeatured());
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  
  return (
    <main>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <NoData />
      ) : (
        <>
          <Slideshow featured={featured} />
          <div className="wrapper">
            <Slider
              data={upcomingMovies}
              heading={"סרטים חדשים"}
              path={"/movies/category/popular"}
            />
            <Slider
              data={popularTv}
              heading={"סדרות פופולריות"}
              path={"/tv/category/popular"}
              type={"tv"}
            />
            <Slider
              data={topRatedMovies}
              heading={"המדורגים ביותר"}
              path={"/movies/category/top_rated"}
              type={"tv"}
            />
          </div>
        </>
      )}
    </main>
  );
};

export default Home;
