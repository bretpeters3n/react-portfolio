import React from "react";
import Profile from "../assets/img/bretpetersen.png";

export default function About() {
  return (
    <div className="about-row">
      <div className="about-column">
        <h2>About Me</h2>
        <p>
          I enjoy being at the forefront of technology and am focused on
          connecting everyday users with emerging technologies. I became
          interested in coding at an early age, and after practcing design in
          silicon valley for years, I’m excited to be doing it myself!
          <br />I really love street biking, live comedy, live music, and
          problem solving. I enjoy meeting new people and learning new things :)
        </p>
      </div>
      <div className="about-column">
        <img src={Profile} />
      </div>
    </div>
  );
}
