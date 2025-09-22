import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext

// Mobile NavItem Component (helper for MobileNav)
const MobileNavItem = ({ label, to, onClick, activeSection, section, setActiveSection, setIsOpen }) => {
  const commonClasses = `block w-full text-left px-4 py-3 text-lg font-semibold transition-all duration-300 ease-in-out`;
  const activeClasses = `bg-white text-black shadow-md`;
  const inactiveClasses = `text-white hover:bg-gray-800`;

  if (to) { // If 'to' prop is provided, it's a Link
    return (
      <Link
        to={to}
        onClick={() => setIsOpen(false)} // Close menu after selection
        className={`${commonClasses} ${window.location.pathname === to ? activeClasses : inactiveClasses}`}
      >
        {label}
      </Link>
    );
  } else if (onClick) { // If 'onClick' prop is provided, it's a button (e.g., Logout)
    return (
      <button
        onClick={() => {
          onClick();
          setIsOpen(false); // Close menu after selection
        }}
        className={`${commonClasses} ${inactiveClasses}`} // Logout is never "active" in terms of route
      >
        {label}
      </button>
    );
  } else { // Original section navigation
    return (
      <button
        onClick={() => {
          setActiveSection(section);
          setIsOpen(false); // Close menu after selection
        }}
        className={`${commonClasses} ${activeSection === section ? activeClasses : inactiveClasses}`}
      >
        {label}
      </button>
    );
  }
};

const MobileNav = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useContext(AuthContext); // Use AuthContext
  const { isAuthenticated, loading, user } = state;

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 rounded-md p-2 transition-all duration-300 hover:scale-110"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          ></path>
        </svg>
      </button>
      {isOpen && !loading && ( // Only render menu if not loading
        <div className="absolute right-0 mt-2 w-48 bg-black rounded-2xl shadow-xl py-2 z-10 border border-gray-700">
          {isAuthenticated ? (
            <>
              <MobileNavItem label="Blog" to="/blogs" setIsOpen={setIsOpen} /> {/* Added Blog link */}
              <MobileNavItem label="Dashboard" to="/dashboard" setIsOpen={setIsOpen} />
              {user && user.role === 'admin' && (
                <MobileNavItem label="Admin" to="/admin" setIsOpen={setIsOpen} />
              )}
              <MobileNavItem label="Logout" onClick={logout} setIsOpen={setIsOpen} />
            </>
          ) : (
            <>
              <MobileNavItem label="Blog" to="/blogs" setIsOpen={setIsOpen} /> {/* Added Blog link */}
              <MobileNavItem label="Register" to="/register" setIsOpen={setIsOpen} />
              <MobileNavItem label="Login" to="/login" setIsOpen={setIsOpen} />
            </>
          )}
          {/* Original section navigation items - keep if still needed for in-page scrolling */}
          <MobileNavItem label="Portfolio" section="portfolio" activeSection={activeSection} setActiveSection={setActiveSection} setIsOpen={setIsOpen} />
          <MobileNavItem label="Daily Routine" section="daily-routine" activeSection={activeSection} setActiveSection={setActiveSection} setIsOpen={setIsOpen} />
          <MobileNavItem label="Image Posting" section="image-posting" activeSection={activeSection} setActiveSection={setIsOpen} />
          <MobileNavItem label="Blog" section="blog" activeSection={activeSection} setActiveSection={setIsOpen} />
        </div>
      )}
    </div>
  );
};

export default MobileNav;
