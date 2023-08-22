import React from "react";
import giftlogo from "../../assest/gift.svg";
import './Section3.css';
import "@fontsource/inter";

const Section3 = () => {
  return (
    <div className="s3-main-container">
      <div className="s3-main-header">
        <p id="Why Choose us?">Why Choose us?</p>
      </div>
      <div className="s3-sub-container">
        <div className="s3-sub1">
          <div className="s3-img">
            <img src={giftlogo} alt="gift logo" />
          </div>
          <div className="s3-header">
            <p>98% Success Rate</p>
          </div>
          <div className="s3-context">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <div>
            <button className="s3-btn">Read More</button>
          </div>
        </div>

        <div className="s3-sub2">
          <div className="s3-img">
            <img src={giftlogo} alt="gift logo" />
          </div>
          <div className="s3-header">
            <p>100% Success Rate</p>
          </div>
          <div className="s3-context">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <div>
            <button className="s3-btn">Read More</button>
          </div>
        </div>

        <div className="s3-sub3">
          <div className="s3-img">
            <img src={giftlogo} alt="gift logo" />
          </div>
          <div className="s3-header">
            <p>100% Success Rate</p>
          </div>
          <div className="s3-context">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <div>
            <button className="s3-btn">Read More</button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Section3;
