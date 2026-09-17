import PropTypes from "prop-types";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const ProjectCard = ({
  name,
  description,
  badge,
  featured,
  highlights,
  stack,
  img,
  source,
  preview,
}) => {
  return (
    <motion.div
      className="project-card-modern"
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      {/* Thumbnail Box */}
      <div className="project-thumb-box">
        {badge && <span className="project-badge-pill">{badge}</span>}
        {featured && <span className="project-badge-featured">Featured</span>}
        <img src={img} alt={name} loading="lazy" />
      </div>

      {/* Card Content Body */}
      <div className="project-body">
        <h3 className="project-title-modern">{name}</h3>
        <p className="project-desc-modern">{description}</p>

        {/* Highlights / Architecture bullet points */}
        {highlights && highlights.length > 0 && (
          <ul className="project-highlights-list">
            {highlights.map((bullet, idx) => (
              <li key={idx}>▹ {bullet}</li>
            ))}
          </ul>
        )}

        {/* Tech Stack Chips */}
        {stack && stack.length > 0 && (
          <div className="project-tags-wrap">
            {stack.map((tech, idx) => (
              <span key={idx} className="project-tag-chip">
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="project-actions-row">
          {preview && (
            <a
              href={preview}
              target="_blank"
              rel="noreferrer"
              className="btn-card-primary"
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noreferrer"
              className="btn-card-secondary"
              title="View Repository"
            >
              <FiGithub /> Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  badge: PropTypes.string,
  featured: PropTypes.bool,
  highlights: PropTypes.arrayOf(PropTypes.string),
  stack: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.string.isRequired,
  source: PropTypes.string,
  preview: PropTypes.string,
};

export default ProjectCard;
