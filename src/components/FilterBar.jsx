import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const FilterBar = () => {
    const [currentRoute,setCurrentRoute] = React.useState([{},{},{}])
  return (
    <div className="filter-bar">
      <div className="routes">
        <h1>
          פופולרים
          <span>
            <MdKeyboardArrowDown />
          </span>
        </h1>
        <div className="route-list">
            
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
