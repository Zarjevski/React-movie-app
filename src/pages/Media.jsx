import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getData } from "../api/TMDB";

const Media = () => {
  const [data, setData] = useState([]);
  const { media } = useParams();
  const { pathname } = useLocation();
  let mediaTitle =
    media === "images"
      ? "גלריית תמונות"
      : media === "videos"
      ? "גלריית סרטונים"
      : "";
  const fetchData = async () => {
    const response = await getData(pathname);
    console.log(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="center media">
      <div className="wrapper">
        <header>
          <div className="image-container">
            <img src="" alt="" />
          </div>
          <div>
            <h2>movie name</h2>
            <h1>{mediaTitle}</h1>
          </div>
        </header>
        <div className="grid"></div>
      </div>
    </section>
  );
};

export default Media;
