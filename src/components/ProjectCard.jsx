import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
// import { motion } from "framer-motion";
const ProjectCard = (props) => {
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { duration: 0.8 } },
  // };
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="project-title">
        <h2>{props.name}</h2>
      </div>
      <div className="project-description">
        <p>{props.description}</p>
      </div>
      {props.stack && props.stack.length > 0 && (
        <div className="project-tags">
          {props.stack.map((item, index) => (
            <span key={index} className="project-tag">
              {item}
            </span>
          ))}
        </div>
      )}
      <div className="project-links">
        {props.source && (
          <div>
            <a href={props.source} className="github" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href={props.preview} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};

export default ProjectCard;
