import React from "react";
import { FaBan,FaAngleDown, FaAngleUp } from "react-icons/fa";

const DelButton = ({ onClick, showTog }) => {
  return (
    <div
      className="btn"
      onClick={onClick}
      style={{ backgroundColor: "white", color: "black" }}
    >
      <h2><FaBan/></h2>
    </div>
  );
};

export default DelButton;
