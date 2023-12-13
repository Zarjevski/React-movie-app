import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchBar = ({active, toggle}) => {
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/search/${search}`);
      setSearch("");
      toggle()
    }
  };
  return (
    <form className="search-bar" onSubmit={handleSubmit} style={active ? {display: "block"} : {}}>
      <div className="search">
        <input type="text" onChange={(e)=> setSearch(e.target.value)} placeholder="חיפוש" />
        <button className="search-icon" type="submit">
          <AiOutlineSearch/>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
