import React from "react";
import avatar from "../avatar.jpg";
import "../styles/PastProjects.scss";

export default function PastProjects() {
  // *you may want to add flex rows to this for organizing cards across screen sizes
  return (
    <div className="projectCards">
      <div className="projectSection">
        <h2>boca burger</h2>
        <img src={avatar} alt="project placeholder" />
        <div className="links">
          <a href="#">Site Link</a>
          <span>|</span>
          <a href="#">GitHub</a>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="projectSection">
        <h2>boca burger</h2>
        <img src={avatar} alt="project placeholder" />
        <div className="links">
          <a href="#">Site Link</a>
          <span>|</span>
          <a href="#">GitHub</a>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="projectSection">
        <h2>boca burger</h2>
        <img src={avatar} alt="project placeholder" />
        <div className="links">
          <a href="#">Site Link</a>
          <span>|</span>
          <a href="#">GitHub</a>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}
