import React from "react";
import Workshop from "../components/Workshop";
import { COLOURS } from "../components/COLOURS";

function About() {
  return (
    <div id="pageAbout" className="flexColumn">
      <div className="blurb">
        <h1>
          it's difficult for high schools to keep their curricula and clubs up
          to date with the latest advancements in STEM. that's where{" "}
          <span style={{ color: COLOURS.main }}>λ</span>emma comes in.
        </h1>
        <p>
          we maintain and update a library of workshops designed for high
          schoolers to prepare for and learn about the newest careers in STEM.
          these include robotics, quantum computing, artifical intelligence, and
          more.
        </p>
        <p>
          we also recruit and train top-performing university students to
          instruct the workshops covering their field of expertise. this keeps
          our pool of instructors fresh, up-to-date, and local to the community.
        </p>
        <p>
          below are the workshops we offer and the cities we service. whether
          you're a student looking to instruct or a school looking to book, if
          you can't find your city just get in touch with us. we're always
          looking to expand our network.
        </p>
      </div>
      <Workshop
        title="quantum computation for dummies."
        description="this workshop introduces the basics of quantum mechanics, like superpositions, and how quantum circuits work inside computers."
      />
      <Workshop
        title="minecraft redstone."
        description="we'll explore the basics of redstone in minecraft, learning how computers think and store data in memory."
      />
    </div>
  );
}

export default About;
