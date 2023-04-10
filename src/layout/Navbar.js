import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { Link,useNavigate } from "react-router-dom";
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <nav>
      <div>
        <AiOutlineMenu onClick={()=> setIsNavOpen(true)}/>
        <h1 onClick={()=> navigate('/')}>טריילרים</h1>
      </div>
      <ul style={isNavOpen ? {} : {display:"none"}}>
        <Link to={"/"}>בית</Link>
        <Link to={"/movies"}>סרטים</Link>
        <Link to={"/tv"}>סדרות</Link>
        <Link to={"/shop"}>חנות</Link>
      </ul>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
