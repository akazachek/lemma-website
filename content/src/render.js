import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

const generateHTML = (page) => {
  const html = renderToString(<App page={page} />);
  console.log(html);
  return html;
};

const page = process.argv[2];
generateHTML(page);
