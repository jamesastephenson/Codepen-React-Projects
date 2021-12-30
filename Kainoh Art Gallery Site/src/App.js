import "./styles.css";
import Banner from "./Banner.js";
import Container from "./Container.js";
import Lead from "./Lead.js";
import Nav from "./Nav.js";
import ScrollToTop from "./ScrollToTop.js";

// TO DO:
// NOW:
//  -implement fullscreen modal functionality after image click
// LATER:
//  -organize images and stylesheets
//  -consider putting actual text on things

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      {/*  fullscreen div for testing   
      <div className="Fullscreen">
        <img src={boy} />
      </div>
      */}
      <Lead />
      <Container />
      <ScrollToTop />
    </div>
  );
}
