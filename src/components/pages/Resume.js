import React from "react";
import Pdf from "../assets/docs/bretpetersen_resume_11132021.pdf";

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <a href={Pdf}>Download Resume</a>
      <br />
      <br />
      <h5>Profile</h5>
      <p>
        <strong>My point of view, and a few thoughts on my profession:</strong>
        <br />I enjoy being at the forefront of technology and am focused on
        connecting everyday users with emerging technologies. I became
        interested in coding at an early age, and after practicing design in
        silicon valley for years, I’m excited to be doing it myself! I really
        love street biking, live comedy, live music, and problem solving. I
        enjoy meeting new people and learning new things :)
      </p>

      <h5>Skills</h5>
      <p>
        <ul>
          <li>HTML</li>
          <li>Javascipt</li>
          <li>CSS</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Express</li>
          <li>Node.js</li>
          <li>React.js</li>
        </ul>
      </p>

      <h5>Education</h5>
      <p>
        <ul>
          <li>
            <strong>Full-Stack Development Certificate</strong>
            <br />
            University of Minnesota
          </li>
          <li>
            <strong>UX Certificate</strong>
            <br />
            Brainco (Minneapolis, MN)
          </li>
          <li>
            <strong>BFA in Graphic Design</strong>
            <br />
            University of Minnesota Duluth
          </li>
        </ul>
      </p>

      <h5>Experience & Training</h5>
      <p>
        <strong>Full Stack Development Bootcamp</strong>
        <br />
        University of Minnesota
      </p>
      <p>
        Throughout this 3+ month bootcamp we learned and practiced professional
        development on a wide array of projects.
        <br />
        The program was designed to teach us everything from client side HTML
        and CSS to server side Node.js.
        <br />
        Group projects were a big part of the experience and allowed us to
        practice working together to solve complex problems.
        <br />
        Listed below are my group project highlights:
      </p>
      <p>
        <ul>
          <li>
            <strong>Cat Memory</strong>
            <br />
            This project consisted of 4 people total. I was designated as the
            leader for this project. My main work was done building the
            interactive Javascript portion of this project. I also assisted
            other team members with their code and questions.
            <br />
            <a href="https://bretpeters3n.github.io/group-project-1-cat-memory/">
              Launch project
            </a>
            <br />
          </li>
          <li>
            <strong>Northern Health Tracker</strong>
            <br />
            This project also consisted of 4 people. I was again designated as
            the leader for this project. Integrating Chart.js into our project
            was my main job. I also assisted with initial planning and routing
            for this project.
            <br />
            <a href="https://northern-health-tracker2.herokuapp.com/">
              Launch project
            </a>
            <br />
          </li>
        </ul>
      </p>
    </div>
  );
}
