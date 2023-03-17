import React from "react";
import SearchBar from './SearchBar'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div><h1>טריילרים</h1></div>
      <ul>
        <Link>בית</Link>
        <Link>סרטים</Link>
        <Link>סדרות</Link>
        <Link>חנות</Link>
      </ul>
      <SearchBar/>
    </nav>
  );
};

export default Navbar;
