import "./styles/App.css";
import Banner from "./components/Banner.js";
import Container from "./components/Container.js";
import Lead from "./components/Lead.js";
import Nav from "./components/Nav.js";
import ScrollToTop from "./components/ScrollToTop.js";

// TO DO:
//  -put actual text on things

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Lead />
      <Container />
      <ScrollToTop />
    </div>
  );
}
