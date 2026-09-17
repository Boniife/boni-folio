import PropTypes from "prop-types";

const Skill = ({ skill }) => {
  // Support both object and string format
  const isObject = typeof skill === "object" && skill !== null;
  const name = isObject ? skill.name : skill.replace(/\.[^/.]+$/, "");
  const icon = isObject ? skill.icon : skill;
  const highlight = isObject ? skill.highlight : "";

  return (
    <div className="skill-card-modern">
      <div className="skill-icon-wrap">
        <img src={`/skills/${icon}`} alt={name} loading="lazy" />
      </div>
      <div className="skill-info">
        <h4 className="skill-title">{name}</h4>
        {highlight && <p className="skill-highlight">{highlight}</p>}
      </div>
    </div>
  );
};

Skill.propTypes = {
  skill: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      category: PropTypes.string,
      highlight: PropTypes.string,
    }),
  ]).isRequired,
};

export default Skill;
