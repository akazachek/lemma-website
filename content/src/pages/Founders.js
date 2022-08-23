import React from "react";
import FlipCard from "../components/FlipCard";

import alex from "../media/alex.jpg";
import lewis from "../media/lewis.jpg";

function Founders() {
  return (
    <div className="pageFounders">
      <div className="blurb">
        <h1>we're a team of academics and educators.</h1>
      </div>
      <div className="flipCardContainer flexRow centred">
        <FlipCard
          img={alex}
          name="Alex Kazachek"
          text={[
            "Alex is in his final year at Western University pursuing an honours degree in mathematics and data science. He has co-authored several academic papers in both mathematical physics as well as machine learning, and earned the prestigous RBC award in data science.",
            "He is λemma's expert in statistics, helping develop our cirriculums for data science and machine learning, as well as quantum computing."
          ]}
        />
        <FlipCard
          img={lewis}
          name="Lewis Glabush"
          text={[
            "Lewis is pursuing his master's degree in mathematics at the University of Waterloo, specializing in cryptography. Prior, he studied mathematics at Western University with a focus on computational neuroscience. He also worked as a high school teacher at London International Academy, teaching math and statistics.",
            "In addition to introducing cryptography to the cirriculum at λemma, he uses his background in teaching when training our instructors."
          ]}
        />
        <FlipCard
          img={lewis}
          name="William Neal"
          text={[
            "Alex is in his third year at Western University pursuing an honours degree in mathematics and data science. He has co-authored several academic papers in both mathematical physics as well as machine learning.",
            "He is λemma's expert in statistics, helping develop our cirriculums for data science and machine learning, as well as quantum computing."
          ]}
        />
        <FlipCard
          img={alex}
          name="Jacob Ender"
          text={[
            "Jacob is a third-year undergraduate in mathematics and computer science at Western University. Coding since a young age, he has placed first and been invited to travel to international hackathons. He also works in the ever-growing field of computer-verified mathematics, contributing to proof libraries.",
            "His programming expertise is core to λemma. He works on every part of the cirricula that involve programming, with a particular focus on game design and computer science."
          ]}
        />
      </div>
    </div>
  );
}

export default Founders;
