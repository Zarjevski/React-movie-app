import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({ setPage, page }) => {
  let buttonsArray = [page];
  const setButtons = () => {
    if (page === 1) {
      for (let i = 2; i < 4; i++) {
        buttonsArray.push(i);
        console.log(buttonsArray);
      }
    }
  };

  React.useEffect(() => {
    setButtons();
  }, []);

  const buttonFunctions = {
    next: () => {
      setPage(page + 1);
    },
    prev: () => {
      if (page === 1) {
        return null;
      } else {
        setPage(page - 1);
      }
    },
  };

  return (
    <div className="pagination">
      <button onClick={() => buttonFunctions.next()}>
        <AiOutlineRight />
      </button>
      {buttonsArray.map((num, index) => {
        return (
          <button
            className="page-number"
            value={num}
            onClick={(e) => {
              setPage(e.target.value);
            }}
          >
            {num}
          </button>
        );
      })}
      <button onClick={() => buttonFunctions.prev()}>
        <AiOutlineLeft />
      </button>
    </div>
  );
};

export default Pagination;
