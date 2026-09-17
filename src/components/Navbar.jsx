import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FiMenu, FiX, FiSend, FiFileText } from "react-icons/fi";

const Navbar = ({ firstName, lastName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <div className="logo">
          <a href="#" onClick={closeMenu}>
            {firstName} <span>{lastName}</span>
          </a>
        </div>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="#about" className="nav-link">About</a>
            </li>
            <li>
              <a href="#experience" className="nav-link">Experience</a>
            </li>
            <li>
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li>
              <a href="#skills" className="nav-link">Skills</a>
            </li>
            <li>
              <a href="#strengths" className="nav-link">Why Me</a>
            </li>
            <li>
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="btn-nav-outline">
            <FiFileText /> Resume
          </a>
          <a href="#contact" className="btn-nav-primary">
            <FiSend /> Let&apos;s Talk
          </a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {isOpen && (
          <div className="mobile-drawer">
            <a href="#about" className="mobile-nav-link" onClick={closeMenu}>About</a>
            <a href="#experience" className="mobile-nav-link" onClick={closeMenu}>Experience</a>
            <a href="#projects" className="mobile-nav-link" onClick={closeMenu}>Projects</a>
            <a href="#skills" className="mobile-nav-link" onClick={closeMenu}>Skills</a>
            <a href="#strengths" className="mobile-nav-link" onClick={closeMenu}>Why Me</a>
            <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>Contact</a>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <a href="#contact" className="btn-nav-outline" style={{ flex: 1, justifyContent: "center" }} onClick={closeMenu}>
                <FiFileText /> Resume
              </a>
              <a href="#contact" className="btn-nav-primary" style={{ flex: 1, justifyContent: "center" }} onClick={closeMenu}>
                <FiSend /> Let&apos;s Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

Navbar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Navbar;
