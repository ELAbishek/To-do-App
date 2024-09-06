import React from "react";


const Button = ({ onClick, showTog }) => {
  return (
    <div
      className="btn"
      onClick={onClick}
      style={{ backgroundColor: "black", color: "white" }}
    >
      <h2>submit</h2>
    </div>
  );
};

export default Button;
