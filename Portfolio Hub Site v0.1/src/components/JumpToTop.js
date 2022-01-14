import React from "react";
import "../styles/JumpToTop.scss";

export default function JumpToTop() {
  // move viewport to top of page
  const ScrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  return (
    <div className="ScrollToTop" onClick={() => ScrollTop()}>
      <button>Jump To Top</button>
    </div>
  );
}
