import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function NavButton(props) {
  const [extended, setExtended] = useState(false);

  const style = useSpring({
    opacity: extended ? 1 : 0.5
  });

  return (
    <animated.a
      className="navButton"
      style={style}
      onMouseEnter={() => setExtended(true)}
      onMouseLeave={() => setExtended(false)}
      href={props.page}
    >
      {extended ? "dwdadwdadawdawdawdad" : props.text}
    </animated.a>
  );
}

export default NavButton;
