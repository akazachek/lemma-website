import React from "react";
import logo from "../media/logo_crop.png";

function LogoButton() {
  return (
    <div id="logoContainer" className="centred">
      <a className="centred" href="/">
        <img id="logo" src={logo} />
      </a>
    </div>
  );
}

export default LogoButton;
