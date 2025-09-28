import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div
      key={project._id}
      className="rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 p-4 flex flex-col justify-between"
    >
      <img
        src={`http://localhost:5000${project.imageUrl}`}
        alt={project.title}
        className="w-full h-48 object-cover rounded-xl"
      />
      <div className="p-4 flex flex-col">
        <h5 className="text-2xl font-semibold text-black dark:text-white mb-3 transition-all duration-300 hover:text-pink-500">
          {project.title}
        </h5>
        <p className="text-gray-700 dark:text-gray-400 text-base leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="mt-5 flex space-x-4 justify-center">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium text-lg py-2 px-4 rounded-full hover:shadow-lg transition-all"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium text-lg py-2 px-4 rounded-full hover:shadow-lg transition-all"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
