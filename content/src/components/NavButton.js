import React from "react";

function NavButton(props) {
  return <a href={props.page}>{props.text}</a>;
}

export default NavButton;
