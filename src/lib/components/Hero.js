import React from "react";
import Button from "./Button";

const Hero = (props) => {
  return (
    <>
      <div className="hero-image">
        <div className="hero-text">
          <h1>{props.heading}</h1>
          <h2>{props.blurb}</h2>
          <Button label="Hire Me" />
        </div>
      </div>
    </>
  );
};

export default Hero;
