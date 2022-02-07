import React from "react";
import Footer from "./components/Footer.js";
import IntroCard from "./components/IntroCard.js";
import JumpToTop from "./components/JumpToTop.js";
import PastProjects from "./components/PastProjects.js";
import SkillsSection from "./components/SkillsSection.js";
import "./styles/App.scss";

// NOTE:
// -links are dead in this version, consider it v0.1
// -assign hrefs when all sites are hosted

export default function App() {
  return (
    <div className="App">
      <IntroCard />
      <SkillsSection />
      <PastProjects />
      <JumpToTop />
      <Footer />
    </div>
  );
}
