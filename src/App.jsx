import "./App.css";
import Hero from "./components/Hero";
import information from "./content/information";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import Heading from "./components/Heading";
import projects from "./content/projects";
import Skill from "./components/Skill";
import skills from "./content/skills";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import blogPosts from "./content/blogPosts";
import ContactForm from "./components/ContactForm";
import BlogPost from "./components/BlogPost";

function App() {
  const projectControls = useAnimation();
  const skillControls = useAnimation();
  const [projectRef, projectInView] = useInView({ triggerOnce: true });
  const [skillRef, skillInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (projectInView) {
      projectControls.start("visible");
    }
    if (skillInView) {
      skillControls.start("visible");
    }
  }, [projectControls, skillControls, projectInView, skillInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <Navbar
        firstName={information.userData.firstName}
        lastName={information.userData.lastName}
      />
      <Hero
        img={information.userData.img}
        description={information.userData.description}
        title={information.userData.title}
      />
      <div className="hr"></div>

      <section id="projects">
        <Heading firstWord="My " secondWord="Projects" />
        <div className="project-description-text">
          <p>
            Frontend And FullStack Project.
          </p>
        </div>

        <div className="project-subsection">
          <h2> <span className="reddie">Professional</span> Projects</h2>
          <motion.div
            className="project-grid"
            ref={projectRef}
            initial="hidden"
            animate={projectControls}
            variants={containerVariants}
          >
            {projects
              .filter((project) => project.category === "professional")
              .map((project, index) => (
                <ProjectCard
                  key={index}
                  name={project.name}
                  img={project.img}
                  description={project.description}
                  source={project.sourceCode}
                  preview={project.preview}
                  stack={project.stack}
                />
              ))}
          </motion.div>
        </div>

        <div className="project-subsection">
          <h2>Personal <span className="reddie">Projects </span></h2>
          <motion.div
            className="project-grid"
            initial="hidden"
            animate={projectControls}
            variants={containerVariants}
          >
            {projects
              .filter((project) => project.category === "personal")
              .map((project, index) => (
                <ProjectCard
                  key={index}
                  name={project.name}
                  img={project.img}
                  description={project.description}
                  source={project.sourceCode}
                  preview={project.preview}
                  stack={project.stack}
                />
              ))}
          </motion.div>
        </div>
      </section>
      <section id="skills">
        <Heading firstWord="Skills" secondWord="&Tools" />
        <motion.div
          className="skill-map"
          ref={skillRef}
          initial="hidden"
          animate={skillControls}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={skillVariants}>
              <Skill skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/*<section id="blog">
        <Heading firstWord="My" secondWord="Blog" />
        <div className="posts">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              image={post.image}
              read={post.link}
              date={post.pubDate}
            />
          ))}
        </div>
        <a className="cyber-scourge" href="https://blog.randiltharusha.me">
          View More Posts
        </a>
          </section> */}
      <section id="contact">
        <Heading firstWord="Contact" secondWord="Me" />
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}

export default App;
