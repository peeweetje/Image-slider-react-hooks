import React, { useState } from "react";
import ReactDOM from "react-dom";
import Slide from "./slide";
import LeftArrow from "./arrowLeft";
import RightArrow from "./arrowRight";

import "./styles.css";

const Slider = () => {
  const data = {
    images: [
      "https://images.unsplash.com/photo-1551222998-8a604fda1d22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1551189014-fe516aed0e9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=805&q=80",
      "https://images.unsplash.com/photo-1550853024-fae8cd4be47f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=807&q=80",
      "https://images.unsplash.com/photo-1550836990-abdb4b80cca8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80",
      "https://images.unsplash.com/photo-1550075400-96f367d102e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
      "https://images.unsplash.com/photo-1545906785-193d7758ba91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    ]
  };

  const [index, setIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const PrevSlide = () => {
    if (index === 0) {
      setTranslateValue(translateValue);
    } else {
      setIndex(index - 1);
      setTranslateValue(translateValue + slideWidth());
    }
  };

  const NextSlide = () => {
    if (index === data.images.length - 1) {
      setIndex(0);
      setTranslateValue(0);
    } else {
      setIndex(index + 1);
      setTranslateValue(translateValue + -slideWidth());
    }
  };

  const slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  return (
    <div className="slider">
      <div
        className="slider-wrapper"
        style={{
          transform: `translateX(${translateValue}px)`,
          transition: "transform ease-out 0.45s"
        }}
      >
        {data.images.map((img, i) => (
          <Slide key={`${i}-${img}`} image={img} />
        ))}
      </div>
      <LeftArrow PrevSlide={PrevSlide} />
      <RightArrow NextSlide={NextSlide} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Slider />, rootElement);
