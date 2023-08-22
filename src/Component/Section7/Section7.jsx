import React from "react";
import "./Section7.css";
import BasicAccordion from "./Accordion";
import "@fontsource/inter";

const Section7 = () => {
  return (
    <>
      <div className="s7">
        <div className="s7-header">
          <p>FAQ</p>
        </div>
        <div className="s7-main-container">
          <div className="s7-container1">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
          <div className="s7-container2">
            <BasicAccordion />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section7;
