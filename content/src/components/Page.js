import React from "react";
import Landing from "../pages/Landing";
import About from "../pages/About";
import Founders from "../pages/Founders";
import Apply from "../pages/Apply";

function Page(props) {
  if (props.page === "landing") {
    return <Landing />;
  } else if (props.page === "about") {
    return <About />;
  } else if (props.page === "founders") {
    return <Founders />;
  } else {
    return <Apply />;
  }
}

export default Page;
