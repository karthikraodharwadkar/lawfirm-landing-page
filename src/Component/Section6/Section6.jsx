import React from "react";
import "./Section6.css";
import daniel from "../../assest/daniel.svg";
import sanfole from "../../assest/sanfole.svg";
import cesforila from "../../assest/cesforila.svg";
import colleen from "../../assest/colleen.svg";
import haldone from "../../assest/haldone.svg";
import nik from "../../assest/nik.svg";
import "@fontsource/inter";

const Section6 = () => {
  return (
    <div className="s6-main-container">
      <div className="s6-container1-header">
        <p>Our Team</p>
      </div>

      <div className="s6-container2">
        <div className="s6-sub1-cont2">
          <div className="s6-team-image">
            <img src={daniel} alt="daniel logo" />
          </div>
          <div className="s6-team-des">
            <p className="s6-team-name">Danial Def</p>
            <p className="s6-team-cases">301 Cases</p>
          </div>
        </div>

        <div className="s6-sub1-cont2">
          <div className="s6-team-image">
            <img src={sanfole} alt="sanfole logo" />
          </div>
          <div className="s6-team-des">
            <p className="s6-team-name">Sanfole</p>
            <p className="s6-team-cases">850 Cases</p>
          </div>
        </div>

        <div className="s6-sub1-cont2">
          <div className="s6-team-image">
            <img src={cesforila} alt="cesforila logo" />
          </div>
          <div className="s6-team-des">
            <p className="s6-team-name">Cesforila</p>
            <p className="s6-team-cases">470 Cases</p>
          </div>
        </div>

        <div className="s6-sub1-cont2">
          <div className="s6-team-image">
            <img src={colleen} alt="colleen logo" />
          </div>
          <div className="s6-team-des">
            <p className="s6-team-name">Colleen</p>
            <p className="s6-team-cases">180 Cases</p>
          </div>
        </div>

        <div className="s6-sub1-cont2">
          <div className="s6-team-image">
            <img src={haldone} alt="haldone logo" />
          </div>
          <div className="s6-team-des">
            <p className="s6-team-name">Haldone</p>
            <p className="s6-team-cases">212 Cases</p>
          </div>
        </div>

        <div className="s6-sub1-cont2">
          <div className="s6-team-image">
            <img src={nik} alt="nik logo" />
          </div>
          <div className="s6-team-des">
            <p className="s6-team-name">Nik Jeo</p>
            <p className="s6-team-cases">350 Cases</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
