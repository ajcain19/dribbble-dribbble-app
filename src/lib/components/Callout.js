import React from "react";

const Callout = (props) => {
  return (
    <>
      <div className="callout-container">
        <h1>{props.heading}</h1>
        <p>{props.blurb}</p>
        <a href="#">{props.linkDescription}</a>
      </div>
    </>
  );
};

export default Callout;
