import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-modern">
      <div className="footer-inner">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://github.com/Boniife" target="_blank" rel="noreferrer">
            Ifeanyi Anyanwu
          </a>
          . Architected with modern React, Framer Motion & Tailwind principles.
        </p>

        <div className="footer-links">
          <button
            className="btn-scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
          >
            Back to Top <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
