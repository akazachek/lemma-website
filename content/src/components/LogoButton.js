import React from "react";
import logo from "../media/logo.png";

function LogoButton() {
  return (
    <div id="logoContainer">
      {" "}
      <a href="/">
        <img id="logo" src={logo} />
      </a>
    </div>
  );
}

export default LogoButton;
