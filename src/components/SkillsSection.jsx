import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "./Heading";
import Skill from "./Skill";
import skills, { skillCategories } from "../content/skills";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === "all") return true;
    return skill.category === activeCategory;
  });

  return (
    <section className="section-container" id="skills">
      <Heading
        eyebrow="Technical Stack"
        firstWord="Skills"
        secondWord="& Tools"
        subtitle="Modern languages, frameworks, state management libraries, and developer tools I build with daily."
      />

      {/* Category Tabs */}
      <div className="skills-filter-nav">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid with AnimatePresence */}
      <motion.div layout className="skills-grid">
        <AnimatePresence>
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Skill skill={skill} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Continuous Marquee Ticker */}
      <div className="marquee-container">
        <div className="marquee-track">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="marquee-item">
              <img src={`/skills/${skill.icon}`} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
