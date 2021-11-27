import "./styles.css";
import Menu from "./Menu";
import Navigation from "./Navigation.js";
import ScrollToTop from "./ScrollToTop.js";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Menu />
      <ScrollToTop />
    </div>
  );
}
