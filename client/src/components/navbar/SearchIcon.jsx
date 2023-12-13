import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const SearchIcon = ({ active, toggle }) => {
  return active ? <IoCloseSharp className="mobile-search" onClick={toggle}/> : <AiOutlineSearch className="mobile-search" onClick={toggle}/>;
};

export default SearchIcon;
