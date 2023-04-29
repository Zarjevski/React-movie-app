import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav>
      <div className="logo-conatiner">
        {isNavOpen ? (
          <AiOutlineClose className="close" onClick={toggleNav} />
        ) : (
          <AiOutlineMenu className="hamburger" onClick={toggleNav} />
        )}
        <h1 onClick={() => navigate("/")}>טריילרים</h1>
      </div>
      <ul style={isNavOpen ? { display: "flex" } : {}}>
        <Link to={"/"} onClick={toggleNav}>
          בית
        </Link>
        <Link to={"/movies"} onClick={toggleNav}>
          סרטים
        </Link>
        <Link to={"/tv"} onClick={toggleNav}>
          סדרות
        </Link>
      </ul>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
