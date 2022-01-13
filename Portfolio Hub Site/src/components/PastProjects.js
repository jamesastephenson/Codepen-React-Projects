import React from "react";
import kaiGallery from "../kai-gallery-image.PNG";
import modernistAuthor from "../modernist-author-image.PNG";
import noteApp from "../note-app-image.PNG";
import "../styles/PastProjects.scss";

export default function PastProjects() {
  // MAKE EACH CARD ITS OWN COMPONENT
  // -you will have to play with widths for screen adjustment
  // *you may want to add flex rows to this for organizing cards across screen sizes
  return (
    <div className="projectCards">
      <div className="projectSection">
        <h2>Notecards</h2>
        <div className="links">
          <a href="#">Site Link</a>
          <span>|</span>
          <a href="#">GitHub</a>
        </div>
        <img src={noteApp} alt="project placeholder" />
        <p>
          CRUD (create, read, update, delete) functionality, Local and Global
          State, Glass UI Design, Responsive UI.
          <br /> <br />
          (Javascript, React, Sass, JSX)
        </p>
      </div>
      <div className="projectSection">
        <h2>Art Gallery</h2>
        <div className="links">
          <a href="#">Site Link</a>
          <span>|</span>
          <a href="#">GitHub</a>
        </div>
        <img src={kaiGallery} alt="project placeholder" />
        <p>
          Gallery site for an independent artist. State transfer through props,
          Modal functionality, Responsive UI, Hover effects.
          <br /> <br />
          (Javascript, React, CSS, JSX)
        </p>
      </div>
      <div className="projectSection">
        <h2>Authors</h2>
        <div className="links">
          <a href="#">Site Link</a>
          <span>|</span>
          <a href="#">GitHub</a>
        </div>
        <img src={modernistAuthor} alt="project placeholder" />
        <p>
          REST API calls, Skip To Content button with state updates, CSS
          Animation, Responsive UI.
          <br /> <br />
          (Javascript, React, CSS, JSX, Axios, Authors REST API)
        </p>
      </div>
    </div>
  );
}
