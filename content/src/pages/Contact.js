import React from "react";
import { COLOURS } from "../components/COLOURS";

function Contact() {
  return (
    <div className="centred">
      <div className="blurb">
        <h1>
          can't find what you need? get in touch with us and we'll see what we
          can do.
        </h1>
        <h1>
          email:{" "}
          <a
            href="mailto:lemmanetwork@gmail.com"
            style={{ color: COLOURS.main, textDecoration: "none" }}
          >
            lemmanetwork@gmail.com
          </a>
        </h1>
        <h1>
          ig:{" "}
          <a
            href="https://www.instagram.com/kazachekalex/"
            style={{ color: COLOURS.main, textDecoration: "none" }}
          >
            lemmanetwork
          </a>
        </h1>
      </div>
    </div>
  );
}

export default Contact;
