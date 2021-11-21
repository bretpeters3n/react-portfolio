import React from "react";

import GitHubLogo from "../assets/icons/github-brands.svg";
import DeployLink from "../assets/icons/external-link-alt-solid.svg";

export default function Portfolio({ portfolioContent }) {
  return (
    <div>
      <h2>Portfolio</h2>
      <div>
        <div className="row">
          {portfolioContent.map((e) => (
            <div
              className="card"
              style={{
                backgroundImage: `url(${e.imagePATH})`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
              }}
              key={e.title}
            >
              <div class="cover">
                <h4>{e.title}</h4>
                <p>{e.subTitle}</p>

                <div className="icon-group">
                  <a href={e.github} target="_blank" rel="noreferrer">
                    <img
                      style={{ height: "32px" }}
                      src={GitHubLogo}
                      alt="GitHub Logo"
                    />
                  </a>
                  <a href={e.deployURL} target="_blank" rel="noreferrer">
                    <img
                      style={{ height: "26px", margin: "3px" }}
                      src={DeployLink}
                      alt="External link icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
