import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        className="button-primary"
        style={{
          margin: "0 0 1rem 0",
          backgroundColor: "lime",
          color: "black",
          fontFamily: "Sans-serif",
          fontSize: "1rem",
          padding: "8px 16px",
          border: "1px lime solid",
          borderRadius: "8px",
          textDecoration: "none",
        }}
        href="#"
      >
        {props.label}
      </button>
    </>
  );
};

export default Button;
