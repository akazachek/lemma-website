import React, { Fragment, useState } from "react";

import { BsArrowRightCircle, BsArrowRightCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useTransition, animated, config } from "react-spring";
import { COLOURS } from "./COLOURS";

function Workshop(props) {
  const [open, setOpen] = useState(false);

  /* 
  this deserves some explaining. on page load, the top icon initially has
  rotation FROM (45 deg) and then transitions to rotation ENTER (0 deg).

  when clicked, open <- true, and so the top icon gets rotation LEAVE (45 deg).
  at the same time, the bottom icon loads with rotation FROM (0 deg), and then gets
  rotation ENTER (45 deg). so, the two icons rotate together, with the top icon
  becoming invisible.

  the reverse behaviour happens with it's clicked again, with both rotating back
  to 0 degrees.
  */
  const iconTransition = useTransition(open, {
    from: {
      opacity: 1,
      position: "absolute",
      transform: open ? "rotate(0deg)" : "rotate(45deg)"
    },
    enter: { opacity: 1, transform: open ? "rotate(45deg)" : "rotate(0deg)" },
    leave: { opacity: 0, transform: open ? "rotate(45deg)" : "rotate(0deg)" },
    config: config.slow
  });

  const detailsTransition = useTransition(open, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <div className="workshop flexColumn">
      <div className="workshopPreview flexRow">
        {iconTransition((style, isOpen) => (
          <animated.div onClick={() => setOpen(!open)} style={style}>
            <IconContext.Provider
              value={{
                color: COLOURS.main,
                size: "5vw",
                className: "workshopIcon"
              }}
            >
              {isOpen ? <BsArrowRightCircleFill /> : <BsArrowRightCircle />}
            </IconContext.Provider>
          </animated.div>
        ))}
        <h2>{props.title}</h2>
      </div>
      {detailsTransition(
        (style, isOpen) =>
          isOpen && (
            <animated.div className="workshopDetails" style={style}>
              {props.description}
            </animated.div>
          )
      )}
    </div>
  );
}

export default Workshop;
