import React from 'react';

const NavItem = ({ label, section, activeSection, setActiveSection }) => (
  <button
    onClick={() => setActiveSection(section)}
    className={`relative px-4 py-2 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out
      ${activeSection === section
        ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 text-white shadow-lg transform scale-105 rotate-1'
        : 'text-gray-200 hover:text-white hover:scale-105 hover:rotate-1 hover:shadow-md'
      } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75
      dark:text-gray-300 dark:hover:text-white`}
  >
    {label}
  </button>
);

export default NavItem;
