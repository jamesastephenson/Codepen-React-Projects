import "./styles.css";
import Modal from "./Modal.js";
import React, { useState } from "react";

export default function Nav() {
  const [show, setShow] = useState(false);

  return (
    <div className="Nav">
      <a href="#" onClick={() => setShow(true)}>
        Contact
      </a>

      <Modal title="Contact" onClose={() => setShow(false)} show={show}>
        <p>email at gmail dot biz</p>
      </Modal>
    </div>
  );
}
