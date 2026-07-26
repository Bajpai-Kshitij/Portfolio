import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import EngineeringPhilosophy from "../components/EngineeringPhilosophy";
import portfolioData from "../data/portfolioData.json";
import Systems from "../components/Systems";
import EngineeringExpertise from "../components/EngineeringExpertise";
import TechnicalWriting from "../components/TechnicalWriting";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="bg-primaryBg text-white overflow-x-hidden">
      
      {/* Sticky Navigation */}
      {/* <Navbar data={portfolioData} /> */}

      {/* Hero */}
      {/* <Hero hero={portfolioData.hero} /> */}

      {/* Timeline */}
      {/* <Timeline timeline={portfolioData.timeline} /> */}

      {/* Skills */}
      {/* <Skills skills={portfolioData.skills} /> */}

      {/* Engineering Philosophy */}
      {/* <EngineeringPhilosophy philosophy={portfolioData.philosophy} /> */}

      {/* Projects */}
      {/* <Projects projects={portfolioData.projects} /> */}

      {/* Engineering Expertise */}
      {/* <EngineeringExpertise expertise={portfolioData.expertise} /> */}

      {/* Systems */}
      {/* <Systems systems={portfolioData.systems} /> */}

      {/* Contact */}
      {/* <Contact
        personal={portfolioData.personal}
        contact={portfolioData.contact}
      /> */}


      <Navbar data={portfolioData} />

<Hero hero={portfolioData.hero} />

<EngineeringPhilosophy philosophy={portfolioData.philosophy} />

<EngineeringExpertise expertise={portfolioData.expertise} />

<Systems systems={portfolioData.systems} />

<Timeline timeline={portfolioData.timeline} />

<TechnicalWriting />

<Contact
  personal={portfolioData.personal}
  contact={portfolioData.contact}
/>


<Footer
  footer={portfolioData.footer}
  personal={portfolioData.personal}
/>
    </div>
  );
}