import React from "react";
import SearchBar from '../components/SearchBar'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div><h1>טריילרים</h1></div>
      <ul>
        <Link to={'/'}>בית</Link>
        <Link to={'/movies'}>סרטים</Link>
        <Link to={'/tv'}>סדרות</Link>
        <Link to={'/shop'}>חנות</Link>
      </ul>
      <SearchBar/>
    </nav>
  );
};

export default Navbar;
