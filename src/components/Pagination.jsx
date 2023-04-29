import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({ setPage, page }) => {
  const pages = [page - 2,page - 1, page, page + 1, page + 2];
  const buttonFunctions = {
    next: () => {
      setPage(page + 1);
    },
    prev: () => {
      setPage((value) => {
        if (value === 1) {
          return value = 1;
        } else {
          return value - 1;
        }
      });
    },
  };
  return (
    <div className="pagination">
      <button onClick={() => buttonFunctions.prev()}>
        <AiOutlineLeft />
      </button>
      {pages.map((num, index) => {
        const active = num === page;
        return num > 0 ? <button
        key={index}
        className={active ? "active" : ""}
        value={num}
        onClick={(e) => {
          setPage((value) => {
            return (value = num);
          });
        }}
      >
        {num}
      </button> : null
      })}
      <button onClick={() => buttonFunctions.next()}>
        <AiOutlineRight />
      </button>
    </div>
  );
};

export default Pagination;
