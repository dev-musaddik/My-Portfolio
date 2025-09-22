import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75
        bg-white dark:bg-black"
    >
      <span
        className="absolute w-6 h-6 bg-black dark:bg-white rounded-full shadow-md transform transition-transform duration-300"
        style={{ transform: theme === 'dark' ? 'translateX(100%)' : 'translateX(0)' }}
      ></span>
      <span className="absolute left-2 text-xs font-semibold text-black dark:text-white">☀️</span>
      <span className="absolute right-2 text-xs font-semibold text-black dark:text-white">🌙</span>
    </button>
  );
};

export default ThemeToggle;
