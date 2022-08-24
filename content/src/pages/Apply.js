import React from "react";
import { COLOURS } from "../components/COLOURS";
import ApplicationTable from "../components/ApplicationTable";

function Apply() {
  return (
    <div className="pageApply flexColumn">
      <div className="blurb">
        <h1>
          how are you looking to use{" "}
          <span style={{ color: COLOURS.main }}>λ</span>emma?
        </h1>
      </div>
      <ApplicationTable />
    </div>
  );
}

export default Apply;
