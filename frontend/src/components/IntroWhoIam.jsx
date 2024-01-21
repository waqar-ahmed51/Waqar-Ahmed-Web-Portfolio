import React from "react";
import waqarAhmedImage from "../assets/waqar-ahmed-profile-pic.png";
import backgroundDotsSvg from "../assets/background-dots.svg";

function IntroWhoIam() {
  return (
    <React.Fragment>
      <div className="conainer-intro-who-iam d-flex justify-content-center">
        <div className="intro-image-background-dots-container">
          <img
            src={backgroundDotsSvg}
            className="intro-image-background-dots"
            alt="Background Dots Image"
          />
        </div>
        <div className="intro-name-container">
          <p className="intro-name">
            <span className="first-name">WAQAR</span>;
            <span className="last-name">AHMED</span>
          </p>
        </div>
        <div className="intro-job-title-container">
          <p className="intro-title">
            <span className="job-title-first">SOFTWARE </span>
            <span className="job-tile-last">ENGINEER</span>
          </p>
        </div>
        <div className="intro-image-profile-continer">
          <img
            src={waqarAhmedImage}
            className="intro-image-profile"
            alt="Waqar Ahmed - Software Enginner"
          />
        </div>
        <div className="intro-footer-scroll-container d-flex justify-content-center">
          <div class="arrow-down"></div>
          <p className="scroll-text">SCROLL DOWN</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default IntroWhoIam;
