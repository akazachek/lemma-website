import React, { Fragment } from "react";
import Page from "./components/Page";
import NavBar from "./components/navBar";
import ContactButton from "./components/contactButton";
import LogoButton from "./components/LogoButton";

function App(props) {
  return (
    <Fragment>
      <div id="page">
        <Page page={props.page} />
      </div>
      <div id="navigation" className="flexColumn">
        <LogoButton />
        <NavBar />
        <ContactButton />
      </div>
    </Fragment>
  );
}

export default App;
