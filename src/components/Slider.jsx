import React, { useState } from "react";
import Card from "./Card";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import {MdKeyboardDoubleArrowLeft} from 'react-icons/md';
import { useNavigate } from "react-router-dom";

const Slider = ({ data, heading, path, type }) => {
  const [precent, setPrecent] = useState(0);
  const navigate = useNavigate()
  const maxPrecent = data.length / 5 * 100;
  const buttonFunctions = {
    forward: () => {
      if (precent === maxPrecent - 100) {
        setPrecent(0)
      } else {
        setPrecent(precent + 100)
      }
    },
    backward: () => {
      if (precent === 0) {
        setPrecent(maxPrecent - 100);
      } else {
        setPrecent(precent - 100)
      }
    },
  };
  return (
    <div className="container">
      <h1 onClick={()=> navigate(path)}>{heading}<MdKeyboardDoubleArrowLeft/></h1>
      <div className="slider" style={{ transform: `translateX(${precent}%)` }}>
        {data.map((card, i) => {
          return (
            <Card
              imgSrc={card ? card.poster_path : null}
              id={card ? card.id : null}
              title={card ? card.title || card.name : null}
              key={i}
              type={type}
            />
          );
        })}
      </div>
      <div className="overlay">
        <button onClick={() => buttonFunctions.backward()}>
          <FaChevronCircleRight />
        </button>
        <button onClick={() => buttonFunctions.forward()}>
          <FaChevronCircleLeft />
        </button>
      </div>
    </div>
  );
};

export default Slider;
