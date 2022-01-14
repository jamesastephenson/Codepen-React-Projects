import React from "react";
import "../styles/IntroCard.scss";
import avatar from "../avatar.jpg";

export default function IntroCard() {
  return (
    <div className="introCard">
      <img src={avatar} alt="James Stephenson icon" />

      <h1>James Stephenson</h1>
      <div className="links">
        <a href="#">Github</a>
        <span>|</span>
        <a href="#">Email</a>
      </div>

      <p className="lead">
        Front End Web Developer since 2020, looking into learning Full Stack
        Development. Graduated with a Bachelors of Science in Psychology from
        the University at Buffalo in 2016. Currently finishing an Associates
        Degree in Web Development from Palomar College.
      </p>
    </div>
  );
}
