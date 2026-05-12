import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import portfolioData from "./data/portfolioData.json";

export default function App() {
  return (
    <div className="bg-primaryBg text-white overflow-x-hidden">
      
      {/* Sticky Navigation */}
      <Navbar data={portfolioData} />

      {/* Hero Section */}
      <Hero data={portfolioData} />

      {/* Timeline / Journey */}
      <Timeline timeline={portfolioData.timeline} />

      {/* Skills */}
      <Skills skills={portfolioData.skills} />

      {/* Projects */}
      <Projects projects={portfolioData.projects} />

      {/* Contact */}
      <Contact
        personal={portfolioData.personal}
        contact={portfolioData.contact}
      />
    </div>
  );
}