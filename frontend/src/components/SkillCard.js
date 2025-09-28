import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div
      key={skill._id}
      className="p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg"
      data-tooltip-id={`skill-tooltip-${skill._id}`}
      data-tooltip-content={`${skill.name}: ${skill.level}%`}
    >
      <div className="mb-4">
        <span className="px-6 py-3 rounded-full font-medium text-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white">
          {skill.name}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
        <div
          className="bg-indigo-500 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
