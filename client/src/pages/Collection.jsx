import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByCategory } from "../api/client";
import Spinner from "../components/common/Spinner";
import CollectionGrid from "../components/collection/CollectionGrid";
import NoData from "../components/Error/NoData";

const Collection = ({ type }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const { search, category } = useParams();
  useEffect(() => {
    setIsLoading(true);
    (async function () {
      try {
        if (type === "discover") {
        } else if (search) {
        } else if (category) {
          setData(await getByCategory(type, category, page));
        }
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
        window.scroll(0, 0);
      }
    })();
  }, [page, search, type, category]);
  return (
    <main>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <NoData />
      ) : (
        <CollectionGrid data={data} page={page} type={type} setPage={setPage} />
      )}
    </main>
  );
};

export default Collection;
