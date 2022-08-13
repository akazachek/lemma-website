import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

const url = window.location.href;
const index = url.lastIndexOf("/");
let page = url.substring(index + 1);
if (page === "") page = "landing";

const root = document.getElementById("root");
hydrateRoot(root, <App page={page} />);
