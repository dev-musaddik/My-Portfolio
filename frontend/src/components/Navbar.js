import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const { state, dispatch } = useContext(AuthContext);
    const { isAuthenticated, loading, user } = state; // Destructure user from state

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    const authLinks = (
        <div className="hidden md:flex space-x-6 items-center">
            <Link to="/blogs" className="text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-all duration-200">Blog</Link> {/* Added Blog link */}
            <Link to="/dashboard" className="text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-all duration-200">Dashboard</Link>
            {user && user.role === 'admin' && (
                <Link to="/admin" className="text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-all duration-200">Admin</Link>
            )}
            <a onClick={logout} href="#!" className="text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-all duration-200">Logout</a>
            <ThemeToggle />
        </div>
    );

    const guestLinks = (
        <div className="hidden md:flex space-x-6 items-center">
            <Link to="/blogs" className="text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-all duration-200">Blog</Link> {/* Added Blog link */}
            <Link to="/register" className="text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-all duration-200">Register</Link>
            <Link to="/login" className="text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-all duration-200">Login</Link>
            <ThemeToggle />
        </div>
    );

    return (
        <nav className="bg-white dark:bg-black p-4 shadow-xl rounded-b-2xl mx-4 mt-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-black dark:text-white text-2xl font-bold">
                    My MERN Portfolio
                </Link>
                {!loading && (<>{isAuthenticated ? authLinks : guestLinks}</>)}

                {/* Mobile Navigation (Hamburger Menu) - Placeholder for now */}
                <div className="md:hidden flex items-center">
                    <ThemeToggle />
                    {/* MobileNav component would go here if needed */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;