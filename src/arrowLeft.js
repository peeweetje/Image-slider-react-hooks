import React from "react";

const LeftArrow = props => {
  return (
    <div className="left-arrow arrow" onClick={props.PrevSlide}>
      <i className="fas fa-angle-left fa-2x" aria-hidden="true" />
    </div>
  );
};

export default LeftArrow;
