import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

const generateHTML = () => {
  const html = renderToString(<App />);
  console.log(html);
  return html;
};

generateHTML();
