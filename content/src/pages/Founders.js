import React from "react";
import FlipCard from "../components/FlipCard";

function Founders() {
  return (
    <div className="pageFounders">
      <div className="blurb">
        <h1>we're a team of academics and educators.</h1>
      </div>
      <div className="flipCardContainer flexRow">
        <FlipCard />
      </div>
    </div>
  );
}

export default Founders;
