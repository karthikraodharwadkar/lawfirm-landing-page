import React from "react";
import "./Slide1Content.css";
import humanlogo from "../../../assest/humanlogo.svg";
import "@fontsource/inter";

const Slide1Content = () => {
  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="container1">
          <div className="header">
            <p>You don’t have to</p>
            <p className="h2">Fight them Alone.</p>
          </div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sunt
              quo possimus ipsa voluptatum impedit consectetur inventore quae
              molestiae voluptas est omnis tempore odio, tenetur ipsum quaerat
              numquam porro laboriosam.
            </p>
          </div>
          <div className="email-text">
            <input type="email" placeholder="Enter your email address" />
            <button className="e-btn">Let's Talk</button>
          </div>
        </div>
        <div className="container2">
          <img src={humanlogo} alt="representative logo" />
        </div>
      </div>
    </div>
  );
};

export default Slide1Content;
