import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { COLOURS } from "./COLOURS";

function NavButton(props) {
  const [extended, setExtended] = useState(false);

  const linkSpring = useSpring({
    color: extended ? COLOURS.accent : COLOURS.main,
    width: extended ? "100vw" : "20vw",
    paddingRight: extended ? "10vw" : "5vw"
  });

  const containerSpring = useSpring({
    backgroundColor: extended ? COLOURS.main : "transparent"
  });

  return (
    /* button elements have a z-index of 100 to stay above this 
    div normally, but when it's extended we need it to then be above
    that, so we set its z-index even higher */
    <animated.div
      className={"extendedNavButtonContainer" + (extended ? " extraOnTop" : "")}
      style={containerSpring}
    >
      <animated.a
        className={"navButton"}
        style={linkSpring}
        onMouseEnter={() => setExtended(true)}
        onMouseLeave={() => setExtended(false)}
        href={props.page}
      >
        {extended ? props.textLong : props.textShort}
      </animated.a>
    </animated.div>
  );
}

export default NavButton;
