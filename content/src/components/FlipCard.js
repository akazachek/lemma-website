import React, { useState } from "react";
import { COLOURS } from "./COLOURS";
import { useSpring, animated } from "react-spring";
import { IconContext } from "react-icons";
import { BsChevronDoubleDown } from "react-icons/bs";

function FlipCard(props) {
  const [flipped, setFlipped] = useState(false);

  const { opacity, transform } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: "perspective(600px) rotateX(" + (flipped ? 180 : 0) + "deg)"
  });

  return (
    <div onClick={() => setFlipped(!flipped)} className="flipCard">
      {/* the two sides have reverse transition behaviour, so we use one 
      spring and simply interpolate to get the inverse one */}
      <animated.div
        className="flipCardSide flexColumn"
        style={{
          opacity: opacity.interpolate((o) => 1 - o),
          transform
        }}
      >
        <img src={props.img} />
        <h2>{props.name}</h2>
        <p className="opacityGradient">{props.text.join()}</p>
        <div className="centred">
          <IconContext.Provider
            value={{
              color: COLOURS.accent,
              size: "4vh"
            }}
          >
            <BsChevronDoubleDown />
          </IconContext.Provider>
        </div>
      </animated.div>
      <animated.div
        className="flipCardSide"
        style={{
          opacity,
          transform: transform.interpolate((t) => t + "rotateX(180deg)")
        }}
      >
        <h2>{props.name}</h2>
        {props.text.map((text) => (
          <p>{text}</p>
        ))}
      </animated.div>
    </div>
  );
}

export default FlipCard;
