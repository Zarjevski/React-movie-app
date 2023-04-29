import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = React.useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/search/${search}`);
      setSearch("");
    }
  };
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div
        className="search-icon"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <AiOutlineSearch onClick={handleSubmit} />
      </div>
      <div className="search">
        <input
          value={search}
          style={isSearchOpen ? {} : { width: 0, padding: 0 }}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>
    </form>
  );
};

export default SearchBar;
