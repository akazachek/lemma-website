import React, { useState } from "react";
import { COLOURS } from "./COLOURS";

function ApplicationTableTab(props) {
  return (
    <div
      className={
        "appTableTab centred" + (props.open ? " tabOpen" : " tabClosed")
      }
      onClick={props.click}
    >
      <h1>{props.expanded ? props.expandedText : props.collapsedText}</h1>
    </div>
  );
}

export default ApplicationTableTab;
