import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function NavButton(props) {
  const [extended, setExtended] = useState(false);

  const styleLink = useSpring({
    color: extended ? "white" : "red",
    width: extended ? "100vw" : "20vw",
    paddingRight: extended ? "10vw" : "5vw"
  });

  const styleContainer = useSpring({
    backgroundColor: extended ? "red" : "transparent"
  });

  return (
    <animated.div className="extendedNavButtonContainer" style={styleContainer}>
      <animated.a
        className={"navButton"}
        style={styleLink}
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
