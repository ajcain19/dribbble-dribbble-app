import React from "react";

const Footer = (props) => {
  return (
    <>
      <div className="footer" style={{ backgroundColor: "lime" }}>
        <h2>{props.label}</h2>
      </div>
    </>
  );
};

export default Footer;
