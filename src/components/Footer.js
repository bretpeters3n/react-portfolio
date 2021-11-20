import React from "react";
import "./styles/Main.css";
import GitHubLogo from "./assets/icons/github-brands.svg";
import LinkedInLogo from "./assets/icons/linkedin-brands.svg";
import StackLogo from "./assets/icons/stack-overflow-brands.svg";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://github.com/bretpeters3n"
        target="_blank"
        rel="noreferrer"
      >
        <img
          style={{ height: "32px", margin: "12px" }}
          src={GitHubLogo}
          alt="GitHub Logo"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/bret-petersen-8002023/ "
        target="_blank"
        rel="noreferrer"
      >
        <img
          style={{ height: "32px", margin: "12px" }}
          src={LinkedInLogo}
          alt="GitHub Logo"
        />
      </a>
      <a
        href="https://stackoverflow.com/users/16771098/bretpetersen82"
        target="_blank"
        rel="noreferrer"
      >
        <img
          style={{ height: "32px", margin: "12px" }}
          src={StackLogo}
          alt="GitHub Logo"
        />
      </a>
    </div>
  );
}
