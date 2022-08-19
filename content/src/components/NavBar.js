import React from "react";
import NavButton from "./NavButton";

function NavBar() {
  return (
    <div id="navBar">
      <NavButton
        textShort="WHAT"
        textLong="what does λemma provide?"
        page="about"
      />
      <NavButton
        textShort="WHO"
        textLong="who is behind λemma?"
        page="founders"
      />
      <NavButton
        textShort="HOW"
        textLong="how do i book or work for λemma?"
        page="apply"
      />
    </div>
  );
}

export default NavBar;
