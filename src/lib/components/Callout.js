import React from "react";
// import "../../App.scss";

const Callout = (props) => {
  return (
    <>
      <div
        className="callout-container"
        style={{
          // Callout Container
          padding: "16px",
          margin: "24px 0px",
          border: "1px solid grey",
          minWidth: "50%",
          backgroundColor: "white",
          color: "#000",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
        }}
      >
        <h2 style={{ margin: "0px" }}>{props.heading}</h2>
        <p style={{ color: "#333" }}>{props.blurb}</p>
        <a
          href="#"
          style={{
            color: "blue",
          }}
        >
          {props.linkDescription}
        </a>
      </div>
    </>
  );
};

export default Callout;
