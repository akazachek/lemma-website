import React from "react";
import { COLOURS } from "../components/COLOURS";

function Landing() {
  return (
    <div id="pageLanding" className="flexRow">
      <h1>
        <span style={{ color: COLOURS.main }}>λ</span>emma fills gaps in STEM
        education.
      </h1>
      <h1>we network top university students with high schools.</h1>
    </div>
  );
}

export default Landing;
