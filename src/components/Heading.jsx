import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Heading = ({ eyebrow, firstWord, secondWord, subtitle }) => {
  return (
    <motion.div
      className="section-heading-wrap"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
      <h2 className="section-title">
        {firstWord} <span>{secondWord}</span>
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.div>
  );
};

Heading.propTypes = {
  eyebrow: PropTypes.string,
  firstWord: PropTypes.string.isRequired,
  secondWord: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Heading;
