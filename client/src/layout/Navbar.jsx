import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import SearchIcon from "../components/navbar/SearchIcon";
import MenuIcon from "../components/navbar/MenuIcon";
import SearchBar from "../components/navbar/SearchBar";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav>
      <div className="logo-conatiner">
        <MenuIcon toggleNav={toggleNav} active={isNavOpen} />
        <img
          src={logo}
          alt="trailers"
          className="logo"
          onClick={() => navigate("/")}
        />
        <SearchIcon active={isSearchOpen} toggle={toggleSearch} />
      </div>
      <ul style={isNavOpen ? { display: "flex" } : {}}>
        <Link to={"/"} onClick={toggleNav}>
          בית
        </Link>
        <Link to={"/discover/movies"} onClick={toggleNav}>
          סרטים
        </Link>
        <Link to={"/discover/tv"} onClick={toggleNav}>
          סדרות
        </Link>
      </ul>
      <SearchBar active={isSearchOpen} toggle={toggleSearch} />
    </nav>
  );
};

export default Navbar;
