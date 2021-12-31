import "../styles/Container.css";
import Card from "./Card.js";
import eels from "../images/eels.png";
import emotes from "../images/emotes.jpg";
import cat from "../images/cat-worker.png";
import boy from "../images/boy.png";
import kaiCoat from "../images/kai-coat.jpg";
import larsen from "../images/larsen.jpg";
import React, { useState } from "react";
import ImageModal from "./ImageModal";

export default function Container() {
  // state for image modal (boolean)
  const [show, setShow] = useState(false);
  // state for image source (variable from import)
  const [image, setImage] = useState(boy);

  // state is changed when Card component is clicked

  return (
    <div className="Container">
      <Card
        onClick={() => {
          setShow(true);
          setImage(larsen);
        }}
        title="Larsen"
        lead="(2021)"
        image={larsen}
        description="Larsen, an tall eel cop with a bad-tempered and sulky attitude who can't stop his pipe smoking wherever he goes... "
      />

      <Card
        onClick={() => {
          setShow(true);
          setImage(kaiCoat);
        }}
        title="Fall"
        lead="(2020)"
        image={kaiCoat}
        description="Don't get too cold, now."
      />

      <Card
        onClick={() => {
          setShow(true);
          setImage(emotes);
        }}
        title="Emotes"
        lead="(2021)"
        image={emotes}
        description="Ten emotes for twitch.tv"
      />

      <Card
        onClick={() => {
          setShow(true);
          setImage(boy);
        }}
        title="The Boy"
        lead="(2020)"
        image={boy}
        description="[UNKNOWN]"
      />

      <Card
        onClick={() => {
          setShow(true);
          setImage(eels);
        }}
        title="Snake Parasite"
        lead="(2020)"
        image={eels}
        description="The change was slow, but soon his body merely became a vessel."
      />

      <Card
        onClick={() => {
          setShow(true);
          setImage(cat);
        }}
        title="Cat Worker"
        lead="(2019)"
        image={cat}
        description="Enjoying a warm drink before starting on his next contract."
      />

      {/* Modal's 'show' and 'image' properties are affected by state */}
      <ImageModal
        title="Modal"
        src={image}
        onClose={() => setShow(false)}
        show={show}
      />
    </div>
  );
}
