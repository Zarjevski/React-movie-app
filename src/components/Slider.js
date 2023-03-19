import React from "react";
import Card from "./Card";

const Slider = ({ data, heading }) => {
  return (
    <div className="container">
      <h1>{heading}</h1>
      <div className="slider">
        {data.map((card, i) => {
          return (
            <Card
              imgSrc={card ? card.poster_path : null}
              id={card ? card.id : null}
              title={card ? card.title : null}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
