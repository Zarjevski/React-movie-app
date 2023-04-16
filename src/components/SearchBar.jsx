import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [search, setSearch] = React.useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div className="search-bar">
      <div className="search-icon">
        <AiOutlineSearch />
      </div>
      <div className="search">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  );
};

export default SearchBar;
