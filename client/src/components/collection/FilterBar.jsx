import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const FilterBar = () => {
  const [currentRoute, setCurrentRoute] = React.useState([{}, {}, {}]);
  return (
    <div className="filter-bar">
      <div className="routes">
        <h2>
          פופולרים
          <span>
            <MdKeyboardArrowDown />
          </span>
        </h2>
        <ul className="route-list"></ul>
      </div>
    </div>
  );
};

export default FilterBar;
