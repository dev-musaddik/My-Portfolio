import React, { useState, useEffect } from "react";
import { getProjects, getSkills } from "../api/axiosInstance";
import { Tooltip } from "react-tooltip";
import { useInView } from "react-intersection-observer"; // Import IntersectionObserver hook
import "react-tooltip/dist/react-tooltip.css";

const PortfolioSection = () => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchProjectsAndSkills = async () => {
      try {
        const projectsData = await getProjects();
        const skillsData = await getSkills();
        setProjects(projectsData);
        setSkills(skillsData);
      } catch (error) {
        console.error("Error fetching projects and skills:", error);
      }
    };

    fetchProjectsAndSkills();
  }, []);

  // Intersection Observer for scroll-triggered animations
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative p-10 md:p-16 lg:p-20 rounded-3xl shadow-xl space-y-12 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center w-full h-screen bg-gradient-to-r from-indigo-600 to-blue-500 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-2s">
            Full-Stack Developer | Innovator | Passionate Coder
          </p>
          <a
            href="#about"
            className="text-lg font-medium px-6 py-3 rounded-full bg-white text-black hover:bg-gray-300 dark:hover:bg-gray-700 transition-transform duration-300"
          >
            Learn More About Me
          </a>
        </div>
      </div>

      {/* About Me Section */}
      <div
        id="about"
        ref={aboutRef}
        className={`${
          aboutInView
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-700 p-10 bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-xl space-y-8`}
      >
        <h2 className="text-4xl font-extrabold text-center text-black dark:text-white mb-6">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
              I'm a passionate Full-Stack Developer with expertise in building
              robust and scalable web applications. I love solving complex
              problems and continuously learning new technologies. My goal is to
              make a real-world impact with the projects I create.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
              I specialize in modern web development frameworks like React,
              Node.js, and Express, while also exploring emerging technologies
              such as machine learning and AI.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://via.placeholder.com/300"
              alt="About Me"
              className="rounded-full shadow-xl w-64 h-64 mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div
        ref={skillsRef}
        className={`${
          skillsInView
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-700 p-10 rounded-2xl shadow-xl bg-gradient-to-r from-purple-100 to-blue-200 dark:from-purple-800 dark:to-blue-900`}
      >
        <h4 className="text-4xl font-extrabold text-center text-black dark:text-white mb-8">
          Skills & Technologies
        </h4>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <div
              key={skill._id}
              className="text-center transform hover:scale-110 transition-transform duration-300 relative"
              data-tooltip-id={`skill-tooltip-${skill._id}`}
              data-tooltip-content={`${skill.name}: ${skill.level}%`}
            >
              <span className="px-6 py-3 rounded-full font-medium text-lg shadow-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white">
                {skill.name}
              </span>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <Tooltip id="skill-tooltip" />
      </div>

      {/* Featured Projects Section */}
      <div
        ref={projectsRef}
        className={`${
          projectsInView
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-700 p-10 rounded-2xl shadow-xl bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900`}
      >
        <h4 className="text-4xl font-extrabold text-center text-black dark:text-white mb-8">
          Featured Projects
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 bg-white dark:bg-black"
            >
              <img
                src={`http://localhost:5000${project.imageUrl}`}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h5 className="text-2xl font-semibold text-black dark:text-white mb-3">
                  {project.title}
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-5 flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black dark:text-white hover:underline font-medium text-lg"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black dark:text-white hover:underline font-medium text-lg"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="p-10 rounded-2xl shadow-xl bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 text-center">
        <h4 className="text-4xl font-extrabold text-black dark:text-white mb-6">
          Get in Touch
        </h4>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          Ready to discuss your project? Feel free to reach out, and let's
          collaborate on something amazing!
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:your-email@example.com"
            className="text-lg font-bold text-black dark:text-white hover:underline"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-black dark:text-white hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-black dark:text-white hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
