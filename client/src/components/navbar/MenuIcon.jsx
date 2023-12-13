import React from "react";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";

const MenuIcon = ({ active, toggleNav }) => {
  return active ? (
    <IoCloseSharp className="close" onClick={toggleNav} />
  ) : (
    <IoMenuSharp className="hamburger" onClick={toggleNav} />
  );
};

export default MenuIcon;
