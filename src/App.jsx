import "./App.css";
import { useRef, useState } from "react";
import certificate1 from "./assets/image1.jpeg";
import certificate2 from "./assets/image2.jpeg";
import certificate3 from "./assets/image3.jpeg";

function App() {

  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const [modalType, setModalType] = useState(null);

  const scrollToProjects = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>

      {/* HERO */}
      <section className="hero">

        <h1>
          Hi, I'm <span>Vansh</span>
        </h1>

        <p>
          MERN Stack Developer passionate about building modern,
          scalable and user-friendly web applications.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn" onClick={scrollToProjects}>
            View Projects
          </button>

          <button className="secondary-btn" onClick={scrollToContact}>
            Contact Me
          </button>

        </div>

      </section>


      {/* ABOUT */}
      <section className="section">

        <h2>About Me</h2>

        <div className="about-box">

          <p>
            I'm a MERN Stack Developer with hands-on experience building full-stack web applications using modern
            technologies such as React, Node.js, Express, and MongoDB. I focus on creating responsive, scalable,
            and user-friendly interfaces while ensuring efficient backend functionality.

            During my 6-month internship at XyronixLabs, I was responsible for maintaining and improving the company’s
            website. I worked on updating existing features, fixing UI issues, and developing reusable components to make
            the codebase more modular and maintainable. I also contributed to enhancing the overall user experience by
            improving page structure, responsiveness, and performance.

            Through this experience, I strengthened my skills in front-end development, component-based architecture,
            and collaborating on real-world production projects. I am passionate about learning new technologies and
            continuously improving my ability to build clean, efficient, and impactful web applications.
          </p>

        </div>

      </section>


      {/* SKILLS */}
      <section className="section">

        <h2>Skills</h2>

        <div className="skills-grid">

          {[
            "HTML",
            'CSS',
            "Tailwindcss",
            "React",
            "JavaScript",
            "Node.js",
            "MongoDB",
            "Express",
            "Git",
            "Github",
          ].map((skill) => (

            <div key={skill} className="skill-card">
              {skill}
            </div>

          ))}

        </div>

      </section>


      {/* PROJECTS */}
      <section className="section" ref={projectRef}>

        <h2>Projects</h2>

        <div className="projects-grid">

          {[1].map((project) => (

            <div key={project} className="project-card">

              <h3>Project {project}</h3>

              <p>
                XyronixLabs — during Web Development Internship
                Updated and maintained the company website, ensuring smooth functionality
                and improved user experience while developing reusable components using modern web technologies.
              </p>

              <div className="project-links">

                <a
                  href="https://www.xyronixlabs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/Xyronix-Labs/XyronixLabs_website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CERTIFICATES */}
      <section className="section">
        <h2>Certificates</h2>

        <div className="certificate-buttons">

          {/* MERN GOOGLE CERTIFICATE */}
          <button className="secondary-btn">
            <a
              href="https://media.geeksforgeeks.org/certificates/1768645062/38562c30e6ded65cde34d8ee81e04ba2.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >MERN Stack Certificate
            </a>
          </button>

          {/* TWO CERTIFICATES */}
          <button
            className="secondary-btn"
            onClick={() => setModalType("two")}
          >
            View Certificates
          </button>

          {/* INTERNSHIP CERTIFICATE */}
          <button
            className="secondary-btn"
            onClick={() => setModalType("internship")}
          >
            Internship Certificate
          </button>

        </div>
      </section>
      {/* CONTACT */}
      <section className="contact" ref={contactRef}>
        <h2>Contact Me</h2>
        <p>
          Open for opportunities and collaborations.
        </p>
        <div className="contact-buttons">
          <a
            href="https://github.com/vanshpb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Github</button>
          </a>
          <a
            href="https://www.linkedin.com/in/vansh-sethi-b977a2276"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Linkedin</button>
          </a>
        </div>
        {/* model */}
      </section>

      {modalType && (
        <div className="modal-overlay">
          <div className="modal">

            <button
              className="close-btn"
              onClick={() => setModalType(null)}
            >
              ✕
            </button>

            <h2>Certificates</h2>

            <div className="certificates-grid">

              {modalType === "two" && (
                <>
                  <div className="certificate-card">
                    <img src={certificate3} alt="Certificate 3" />
                  </div>

                  <div className="certificate-card">
                    <img src={certificate2} alt="Certificate 2" />
                  </div>
                </>
              )}

              {modalType === "internship" && (
                <div className="certificate-card">
                  <img src={certificate1} alt="Internship Certificate" />
                </div>
              )}

            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default App;