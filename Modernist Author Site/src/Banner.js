import "./styles.css";
import SkipToContent from "./SkipToContent.js";

export default function Banner() {
  return (
    <div className="Banner sticky">
      <h1>Modernist Authors</h1>
      {/* Skip Content Button Component */}
      <SkipToContent />
    </div>
  );
}
