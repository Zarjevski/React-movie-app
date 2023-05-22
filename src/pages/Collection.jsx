import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { getData, getSearchResult } from "../api/TMDB";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";
// import FilterBar from "../components/FilterBar";

const Collection = ({ type }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();
  const { search } = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    setIsLoading(true);
    if (type === "movie" || type === "tv") {
      (async function () {
        try {
          setData(await getData(`/discover/${type}`, page));
          setIsLoading(false);
          window.scrollTo(0, 0);
        } catch (error) {
          setError(true);
        }
      })();
    } else if (search) {
      (async function () {
        try {
          setData(await getSearchResult(search, page));
          setIsLoading(false);
          window.scroll(0, 0);
        } catch (error) {
          setError(true);
        }
      })();
    } else {
      (async function () {
        try {
          setData(await getData(`${pathname}`, page));
          setIsLoading(false);
          window.scrollTo(0, 0);
        } catch (error) {
          setError(true);
        }
      })();
    }
  }, [pathname, page, search, type]);
  console.log(data);
  return (
    <main>
      {/* <FilterBar/> */}
      {isLoading ? (
        <Spinner />
      ) : error || data === undefined ? (
        <h1>קיימת שגיאה</h1>
      ) : data.length === 0 ? (
        <>
          <h1>לא נמצאו תוצאות</h1>
          <button className="no-result-btn" onClick={()=> navigate(-1)}>חזרה</button>
        </>
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
          <Pagination setPage={setPage} page={page} length={data.length < 1 ? data.length : 0}/>
        </>
      )}
    </main>
  );
};

export default Collection;
