import { motion } from "framer-motion";
import Heading from "./Heading";
import experiences from "../content/experience";

const Experience = () => {
  return (
    <section className="section-container" id="experience">
      <Heading
        eyebrow="Career Journey"
        firstWord="Work"
        secondWord="Experience"
        subtitle="A track record of building, optimizing, and deploying production-grade web systems."
      />

      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="timeline-node">
              <div className="timeline-dot"></div>
            </div>

            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-company">{exp.company} • {exp.location}</div>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-period">{exp.period}</span>
                  <span className="timeline-badge">{exp.type}</span>
                </div>
              </div>

              <p className="timeline-summary">{exp.summary}</p>

              <ul className="timeline-highlights">
                {exp.highlights.map((item, hIndex) => (
                  <li key={hIndex}>{item}</li>
                ))}
              </ul>

              <div className="timeline-skills-wrap">
                {exp.skills.map((skill, sIndex) => (
                  <span key={sIndex} className="timeline-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
