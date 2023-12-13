import React from "react";
import Card from "../common/Card";
import Pagination from "./Pagination";
import FilterBar from "./FilterBar";

const CollectionGrid = ({ data, page, type, setPage }) => {
  return (
    <>
      <FilterBar />
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
      <Pagination
        setPage={setPage}
        page={page}
        length={data.length < 1 ? data.length : 0}
      />
    </>
  );
};

export default CollectionGrid;
