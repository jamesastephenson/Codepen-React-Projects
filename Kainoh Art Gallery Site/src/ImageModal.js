import { useEffect } from "react";
import "./styles.css";

export default function ImageModal(props) {
  // we will handle show/hide with props.show
  // hidden by default, if show is set to true the modal will appear
  if (!props.show) {
    return null;
  }

  const closeOnEscape = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscape);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscape);
    };
  });

  return (
    <div className="Modal" onClick={props.onClose}>
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
        <div className="ModalBody">
          <img src={props.src} alt="fullscreen" />
        </div>
        <div className="ModalFooter">
          <button onClick={props.onClose} className="button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
