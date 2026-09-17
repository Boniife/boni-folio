import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Strengths from "./components/Strengths";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import information from "./content/information";

function App() {
  return (
    <div className="page-wrapper">
      {/* Ambient background light gradients and grid texture */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>
      <div className="ambient-glow-3"></div>
      <div className="bg-grid-pattern"></div>

      <Navbar
        firstName={information.userData.firstName}
        lastName={information.userData.lastName}
      />

      <main>
        <Hero
          img={information.userData.img}
          description={information.userData.description}
          title={information.userData.roleTitle}
          stats={information.userData.stats}
        />

        <Experience />

        <ProjectsSection />

        <SkillsSection />

        <Strengths />

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
