import "../styles/Nav.css";
import Modal from "./Modal.js";
import React, { useState } from "react";

export default function Nav() {
  // modal boolean state (off by default)
  const [show, setShow] = useState(false);

  return (
    <div className="Nav">
      {/* open modal on nav button click */}
      <button onClick={() => setShow(true)}>Contact</button>

      {/* close modal on button click, div click, or esc press */}
      <Modal title="Contact" onClose={() => setShow(false)} show={show}>
        <a class="emailLink" href="mailto:cainomura@gmail.com">
          cainomura@gmail.com
        </a>
      </Modal>
    </div>
  );
}
