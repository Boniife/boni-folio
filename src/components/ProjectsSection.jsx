import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";
import projects from "../content/projects";

const filterTabs = [
  { id: "all", label: "All Projects" },
  { id: "featured", label: "★ Featured Systems" },
  { id: "professional", label: "Enterprise & Client" },
  { id: "personal", label: "Exploratory & Apps" },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return project.featured === true;
    return project.category === activeFilter;
  });

  return (
    <section className="section-container" id="projects">
      <Heading
        eyebrow="Featured Work"
        firstWord="Production"
        secondWord="Projects"
        subtitle="A showcase of enterprise web applications, real-time booking engines, and scalable digital solutions."
      />

      {/* Filter Tabs */}
      <div className="projects-filter-bar">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            className={`filter-btn ${activeFilter === tab.id ? "active" : ""}`}
            onClick={() => setActiveFilter(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid with AnimatePresence */}
      <motion.div layout className="projects-masonry">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id || project.name}
              name={project.name}
              description={project.description}
              badge={project.badge}
              featured={project.featured}
              highlights={project.highlights}
              stack={project.stack}
              img={project.img}
              source={project.sourceCode}
              preview={project.preview}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
