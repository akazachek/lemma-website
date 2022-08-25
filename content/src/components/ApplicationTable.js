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

  const instructor_fields = [
    { label: "First Name", type: "text", name: "firstName" },
    { label: "Last Name", type: "text", name: "lastName" },
    { label: "Email", type: "email", name: "email" },
    { label: "Phone Number", type: "tel", name: "phone" },
    { label: "Address", type: "text", name: "address" },
    { label: "City", type: "text", name: "city" },
    { label: "University", type: "text", name: "uni" },
    {
      label: "Graduation Date (Actual or Expected)",
      type: "date",
      name: "grad"
    },
    { label: "Comments", type: "textarea", name: "comments" },
    { label: "Resume", type: "file", name: "resume" }
  ];

  const school_fields = [
    { label: "School Name", type: "text", name: "school" },
    { label: "Address", type: "text", name: "address" },
    { label: "City", type: "text", name: "city" },
    { label: "Name of Main Contact", type: "text", name: "contact" },
    { label: "Email of Main Contact", type: "email", name: "email" },
    { label: "Phone Number of Main Contact", type: "tel", name: "phone" },
    {
      label: "Tell us a little about your requests!",
      type: "textarea",
      name: "request"
    }
  ];

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
            <Form
              file={true}
              formType={tab === 1 ? "instructor" : "school"}
              fields={tab === 1 ? instructor_fields : school_fields}
            />
          </Fragment>
        )}
      </animated.div>
    </div>
  );
}

export default ApplicationTable;
