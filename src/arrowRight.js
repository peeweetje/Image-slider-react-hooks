import React from "react";

const RightArrow = props => {
  return (
    <div className="right-arrow arrow" onClick={props.NextSlide}>
      <i className="fas fa-angle-right fa-2x" aria-hidden="true" />
    </div>
  );
};

export default RightArrow;
