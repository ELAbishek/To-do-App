import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Button = ({ onClick, showTog }) => {
  return (
    <div
      className="btn"
      onClick={onClick}
      style={{ backgroundColor: "white", color: "black" }}
    >
      <h2>{showTog ? <FaAngleUp /> : <FaAngleDown />}</h2>
    </div>
  );
};

export default Button;
