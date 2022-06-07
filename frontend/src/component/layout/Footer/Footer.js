import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
      
        <p>Download Our App </p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>QUICK-DEAL</h1>
        <p>Your satisfaction is our priority</p>

        <p>Copyrights 2021 &copy; Manish kumar</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/ronnie0_27/">Instagram</a>
        <a href="https://www.linkedin.com/in/manish-kumar-6359181b1/">LinkdIn</a>
        <a href="https://twitter.com/i/flow/login">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
