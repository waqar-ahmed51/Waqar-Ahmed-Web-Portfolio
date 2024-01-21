import React from "react";
import waqarAhmedImage from "../assets/waqar-ahmed-profile-pic.png";
import backgroundDotsSvg from "../assets/background-dots.svg";

function CarouselWhoIam() {
  return (
    <React.Fragment>
      <div className="conainer-corousel-who-iam d-flex justify-content-center">
        <div className="corousel-image-background-dots-container">
          <img
            src={backgroundDotsSvg}
            className="corousel-image-background-dots"
            alt="Background Dots Image"
          />
        </div>
        <div className="corousel-name-container">
          <p className="corousel-name">
            <span className="first-name">WAQAR</span>;
            <span className="last-name">AHMED</span>
          </p>
        </div>
        <div className="corousel-job-title-container">
          <p className="corousel-title">
            <span className="job-title-first">SOFTWARE </span>
            <span className="job-tile-last">ENGINEER</span>
          </p>
        </div>
        <div className="corousel-image-profile-continer">
          <img
            src={waqarAhmedImage}
            className="corousel-image-profile"
            alt="Waqar Ahmed - Software Enginner"
          />
        </div>
        <div className="corousel-footer-scroll-container d-flex justify-content-center">
          <div class="arrow-down"></div>
          <p className="scroll-text">SCROLL DOWN</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CarouselWhoIam;
