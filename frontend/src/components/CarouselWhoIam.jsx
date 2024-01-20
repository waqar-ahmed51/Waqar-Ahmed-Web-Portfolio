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
            alt="Background Image"
          />
        </div>
        <div className="corousel-name-container">
          <p className="corousel-name">
            <span className="first-name">WAQAR</span>&nbsp;{" "}
            <span className="last-name">AHMED</span>
          </p>
        </div>
        <div className="corousel-job-title-container">
          <p className="corousel-title">
            <span className="job-title-first">Software </span> 
            <span className="job-tile-last">Engineer</span>
          </p>
        </div>
        <div className="corousel-image-profile-continer">
          <img
            src={waqarAhmedImage}
            className="corousel-image-profile"
            alt="Waqar Ahmed - Software Enginner"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default CarouselWhoIam;
