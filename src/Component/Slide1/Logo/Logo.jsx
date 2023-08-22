import React from "react";
import firmlogo from "../../../assest/logo.svg";
import './Logo.css'

function Logo() {
  return (
    <div className="logo">
      <img src={firmlogo} alt="logo" />
    </div>
  );
}

export default Logo;
