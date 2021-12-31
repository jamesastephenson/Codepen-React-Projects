import { useEffect } from "react";
import "../styles/Modal.css";

export default function Modal(props) {
  // show/hide handled with props.show
  // hidden by default, if show is set to true the modal will appear
  if (!props.show) {
    return null;
  }

  // ESC to close functionality
  const closeOnEscape = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  // effect when state changes
  // add or remove ESC key event listener
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscape);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscape);
    };
  });

  return (
    <div className="Modal" onClick={props.onClose}>
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
        <div className="ModalHeader">
          <h3 className="ModalTitle">{props.title}</h3>
        </div>
        <div className="ModalBody">{props.children}</div>
        <div className="ModalFooter">
          <button onClick={props.onClose} className="button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
