import React from "react";
import NavButton from "./NavButton";

function NavBar() {
  return (
    <div className="NavBar">
      <NavButton text="what" page="about" />
      <NavButton text="who" page="founders" />
      <NavButton text="how" page="apply" />
    </div>
  );
}

export default NavBar;
