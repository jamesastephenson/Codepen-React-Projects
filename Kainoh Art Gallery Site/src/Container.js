import "./styles.css";
import Card from "./Card.js";
import eels from "./eels.png";
import emotes from "./emotes.jpg";
import cat from "./cat-worker.png";
import boy from "./boy.png";
import kaiCoat from "./kai-coat.jpg";
import larsen from "./larsen.jpg";
import React, { useState } from "react";
import ImageModal from "./ImageModal";

export default function Container() {
  // off by default, can turn on for testing
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(boy);

  return (
    <div className="Container">
      <Card
        onClick={() => {
          setShow(true);
          setImage(larsen);
        }}
        title="Larsen"
        lead="etc etc etc etc etc etc etc etc"
        image={larsen}
        description="description goes here"
      />

      <Card
        onClick={() => {
          setShow(true);
          setImage(kaiCoat);
        }}
        title="Winter"
        lead="etc etc etc etc etc etc etc etc"
        image={kaiCoat}
        description="description goes here"
      />

      <Card
        onClick={() => {
          setShow(true);
          setImage(emotes);
        }}
        title="Twitch Emotes"
        lead="etc etc etc etc etc etc etc etc"
        image={emotes}
        description="description goes here"
      />

      <Card
        onClick={() => {
          setShow(true);
          setImage(boy);
        }}
        title="The Boy"
        lead="etc etc etc etc etc etc etc etc"
        image={boy}
        description="description goes here"
      />

      <Card
        onClick={() => {
          setShow(true);
          setImage(eels);
        }}
        title="Eels"
        lead="etc etc etc etc etc etc etc etc"
        image={eels}
        description="description goes here"
      />
      <Card
        onClick={() => {
          setShow(true);
          setImage(cat);
        }}
        title="Cat Worker"
        lead="etc etc etc etc etc etc etc etc"
        image={cat}
        description="description goes here"
      />

      <ImageModal
        title="Modal"
        src={image}
        onClose={() => setShow(false)}
        show={show}
      />
    </div>
  );
}
