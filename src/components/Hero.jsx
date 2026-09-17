import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FiArrowRight, FiMail, FiFileText } from "react-icons/fi";
import socials from "../content/socials";

const Hero = ({ img, description, stats }) => {
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const floatingAnimationDelay = {
    y: [0, 10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1,
    },
  };

  return (
    <section className="section-container hero-wrapper" id="about">
      <div className="hero-grid">
        {/* Left Column: Intro & Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="availability-pill">
            <span className="pulse-dot"></span>
            Available for Full-Time & Contract Roles
          </div>

          <h1 className="hero-headline">
            Crafting Scalable Web Experiences that <span className="name-highlight">Convert & Scale</span>
          </h1>

          <div className="hero-typewriter-container">
            <span className="hero-typewriter-prefix">I am a</span>
            <span className="hero-typewriter-text">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Software Engineer",
                    "Next.js & React Specialist",
                    "Full-Stack Web Developer",
                    "Redux & RTK Query Architect",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                  delay: 60,
                }}
              />
            </span>
          </div>

          <p className="hero-bio">{description}</p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">
              Explore Featured Projects <FiArrowRight />
            </a>
            <a href="#contact" className="btn-secondary">
              <FiMail /> Get In Touch
            </a>
            <a href="#contact" className="btn-secondary">
              <FiFileText /> View Resume
            </a>
          </div>

          <div className="hero-socials-strip">
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500 }}>
              Connect:
            </span>
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="hero-social-link"
                target="_blank"
                rel="noreferrer"
                title={social.name}
              >
                <img src={`/socials/${social.icon}`} alt={social.name} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Visual Avatar & Floating Badges */}
        <motion.div
          className="hero-visual-wrap"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="avatar-halo-card">
            {/* Floating Tech Chips */}
            <motion.div
              className="floating-chip chip-top-left"
              animate={floatingAnimation}
            >
              <img src="/skills/nextjs.svg" alt="Next.js" />
              <span>Next.js 14+</span>
            </motion.div>

            <motion.div
              className="floating-chip chip-bottom-right"
              animate={floatingAnimationDelay}
            >
              <img src="/skills/react.svg" alt="React" />
              <span>React & TypeScript</span>
            </motion.div>

            <motion.div
              className="floating-chip chip-mid-left"
              animate={floatingAnimation}
            >
              <img src="/skills/redux.jpg" alt="Redux" />
              <span>RTK Query</span>
            </motion.div>

            {/* Profile Avatar Image */}
            <div className="avatar-image-ring">
              <img src={img} alt="Ifeanyi Anyanwu" />
            </div>

            <div className="avatar-caption">
              <h3>Ifeanyi Anyanwu</h3>
              <p>Software Engineer</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Metrics Counter Strip */}
      {stats && stats.length > 0 && (
        <motion.div
          className="stats-strip"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((item, index) => (
            <div key={index} className="stat-item">
              <span className="stat-value">{item.value}</span>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

Hero.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

export default Hero;
