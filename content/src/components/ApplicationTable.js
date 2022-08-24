import React, { Fragment, useState } from "react";
import ApplicationTableTab from "./ApplicationTableTab";
import { useSpring, animated } from "react-spring";
import Form from "../components/Form";

function ApplicationTable() {
  const [tab, setTab] = useState(0);

  const tabSpring = useSpring({
    height: tab === 0 ? "100%" : "15%"
  });

  const applySpring = useSpring({
    height: tab === 0 ? "0%" : "85%"
  });

  return (
    <div className="appTable flexColumn">
      <animated.div className="flexRow" style={tabSpring}>
        <ApplicationTableTab
          click={() => setTab(1)}
          open={tab === 1}
          expanded={tab === 0}
          expandedText="i'm a student who wants to instruct for λemma."
          collapsedText="i'm a student."
        />
        <ApplicationTableTab
          click={() => setTab(2)}
          open={tab === 2}
          expanded={tab === 0}
          expandedText="i'm a school interested hosting in λemma programs."
          collapsedText="i'm a school."
        />
      </animated.div>
      <animated.div className="appTableContent centred" style={applySpring}>
        {tab === 0 ? (
          <Fragment></Fragment>
        ) : (
          <Fragment>
            <h1 style={{ fontSize: "large" }}>hello</h1>
            <Form />
          </Fragment>
        )}
      </animated.div>
    </div>
  );
}

export default ApplicationTable;
