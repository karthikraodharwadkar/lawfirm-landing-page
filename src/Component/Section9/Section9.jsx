import React from "react";
import Logo from "../Slide1/Logo/Logo";
//import Navbar from '../Slide1/Navbar/Navbar'
import NavbarContent from "../Slide1/Navbarcontent/NavbarContent";
import insta from "../../assest/insta.svg";
import facebook from '../../assest/facebook.svg';
import twitter from '../../assest/twitter.svg';
import pinerest from '../../assest/pinerest.svg'
import './Section9.css';
import "@fontsource/inter";

const Section9 = () => {
  return (
    <div className="s9-main-container">
      <div className="s9-container1">
        <Logo />
        <NavbarContent/>
        <div className="s9-icons">
          <img src={insta} alt="insta logo" />
          <img src={facebook} alt="facebook logo" />
          <img src={twitter} alt="twitter logo" />
          <img src={pinerest} alt="pinerest logo" />
        </div>
      </div>
      <div className="s9-container2">
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Section9;
