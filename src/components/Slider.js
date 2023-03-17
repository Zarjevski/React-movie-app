import React from "react";
import Card from "./Card";

const Slider = ({ data, heading }) => {
  return (
    <section className="container">
      <h1>{heading}</h1>
      <div className="slider">
        {data.map((card, i) => {
          return <Card imgSrc={card ? card.poster_path : null} />;
        })}
      </div>
    </section>
  );
};

export default Slider;
