import React from "react";

const Button = (props) => {
  return (
    <button
      className="dribbble-button"
      style={{
        backgroundColor: "lime",
        color: "black",
        fontFamily: "Sans-serif",
        fontSize: "2rem",
        fontWeight: "bold",
        padding: "8px 16px",
        border: "none",
        borderRadius: "8px",
      }}
    >
      {props.label}
    </button>
  );
};

export default Button;
