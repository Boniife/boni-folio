import { motion } from "framer-motion";
import { FiLayers, FiZap, FiCode, FiShield } from "react-icons/fi";
import Heading from "./Heading";

const strengths = [
  {
    icon: <FiLayers />,
    title: "Advanced State Management",
    desc: "Mastery of Redux Toolkit & RTK Query for predictable state flows, optimistic cache updates, automated background polling, and zero-redundancy data fetching.",
  },
  {
    icon: <FiZap />,
    title: "Performance & SEO Optimization",
    desc: "Architecting lightning-fast user experiences via Next.js SSR/SSG, dynamic code-splitting, lazy-loading assets, and achieving high Core Web Vitals scores.",
  },
  {
    icon: <FiCode />,
    title: "Modular, Clean Architecture",
    desc: "Writing maintainable, type-safe code using TypeScript and modern React patterns. Building reusable design systems that scale effortlessly across teams.",
  },
  {
    icon: <FiShield />,
    title: "Battle-Tested Production Experience",
    desc: "Proven track record shipping live commercial products: e-commerce ordering, real-time table reservations, payment integrations (Stripe), and CMS workflows.",
  },
];

const Strengths = () => {
  return (
    <section className="section-container" id="strengths">
      <Heading
        eyebrow="Value Proposition"
        firstWord="Why"
        secondWord="Hire Me"
        subtitle="The engineering standards, architectural principles, and technical depth I bring to every project."
      />

      <div className="strengths-grid">
        {strengths.map((item, index) => (
          <motion.div
            key={index}
            className="strength-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <div className="strength-icon">{item.icon}</div>
            <h3 className="strength-title">{item.title}</h3>
            <p className="strength-desc">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Strengths;
