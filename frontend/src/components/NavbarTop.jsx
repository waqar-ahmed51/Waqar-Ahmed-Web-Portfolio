
import React from "react";

function NavbarTop() {
  return (
    <React.Fragment>
    <div className="col-12 navbar-top-container d-flex justify-content-center align-items-center">
      <div className="col-5 d-flex align-items-center">
        <div className="">WA</div>
      </div>
      <div className="col-5 d-flex justify-content-end align-items-center">
        <div className="border m-2">Colors</div>
        <div className="border m-2">Music</div>
        <div className="border m-2">Dark Mode</div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default NavbarTop;
