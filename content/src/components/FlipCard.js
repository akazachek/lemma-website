import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import alex from "../media/alex.jpg";

function FlipCard(props) {
  const [flipped, setFlipped] = useState(false);

  const { opacity, transform } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: "perspective(600px) rotateX(" + (flipped ? 180 : 0) + "deg)"
  });

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="flipCard onTop centred"
    >
      {/* the two sides have reverse transition behaviour, so we use one 
      spring and simply interpolate to get the inverse one */}
      <animated.div
        class="flipCardFront centred"
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        <img src={alex} />
      </animated.div>
      <animated.div
        class="flipCardBack"
        style={{
          opacity,
          transform: transform.interpolate((t) => t + "rotateX(180deg)")
        }}
      >
        world
      </animated.div>
    </div>
  );
}

export default FlipCard;
