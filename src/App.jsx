import React from "react";
import Header from "./components/Header";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Books from "./components/Books";
import "./App.css";

function App() {
  return (
    <div className="resume-container">
      <Header />
      <ProfessionalSummary />
      <Skills />
      <Experience />
      <Education />
      <Books />
    </div>
  );
}

export default App;
