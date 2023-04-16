import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getData } from "../api/TMDB";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";

const Collection = ({ type }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    setIsLoading(true)
    if (type === "movie" || type === "tv") {
      (async function () {
        try {
          const response = await getData(`/discover/${type}`, page);
          setData(response);
          setIsLoading(false);
          window.scrollTo(0, 0);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      (async function () {
        try {
          setData(await getData(`${pathname}`, page));
          setIsLoading(false);
          window.scrollTo(0, 0);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [pathname, page]);
  return (
    <main>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <h1>there is an error</h1>
      ) : (
        <>
          <section className="collection">
            {data.map((item) => {
              const { title, id, poster_path, name } = item;
              return (
                <Card
                  title={title || name}
                  imgSrc={poster_path}
                  id={id}
                  key={id}
                  type={type}
                />
              );
            })}
          </section>
          <Pagination setPage={setPage} page={page} />
        </>
      )}
    </main>
  );
};

export default Collection;
