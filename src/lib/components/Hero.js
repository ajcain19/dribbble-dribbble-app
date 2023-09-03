import React from "react";
// import "../../App.scss";
import Button from "./Button";

const Hero = (props) => {
  return (
    <>
      <div
        className="hero-image"
        style={{
          backgroundImage:
            "url(" +
            "https://www.usatoday.com/gcdn/presto/2021/12/03/USAT/0e438781-bdd3-4410-8e77-8a0906254333-Photo_by_Steven_Pisano.png" +
            ")",

          height: "500px",
          width: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div
          className="hero-text"
          style={{
            padding: "24px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
          }}
        >
          <h1>{props.heading}</h1>
          <p>{props.blurb}</p>
          <Button label="Primary Button" />
        </div>
      </div>
    </>
  );
};

export default Hero;
