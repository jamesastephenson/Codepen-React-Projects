import React from "react";
import Footer from "./components/Footer.js";
import IntroCard from "./components/IntroCard.js";
import JumpToTop from "./components/JumpToTop.js";
import PastProjects from "./components/PastProjects.js";
import SkillsSection from "./components/SkillsSection.js";
import "./styles/App.scss";

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
