import "./styles.css";

export default function ScrollToTop() {
  const ScrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  return (
    <div className="Scroll-To-Top" onClick={() => ScrollTop()}>
      <button>Jump To Top</button>
    </div>
  );
}
