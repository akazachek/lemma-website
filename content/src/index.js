import React from "react";
import ReactDOM, { hydrateRoot } from "react-dom";
import App from "./App";

const root = document.getElementById("root");
ReactDOM.hydrateRoot(root, <App />);
