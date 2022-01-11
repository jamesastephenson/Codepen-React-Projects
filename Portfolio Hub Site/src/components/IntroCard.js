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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
}
