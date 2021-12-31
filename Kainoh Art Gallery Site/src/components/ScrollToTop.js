import "../styles/ScrollToTop.css";

export default function ScrollToTop() {
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
