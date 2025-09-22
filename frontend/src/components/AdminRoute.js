import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AdminRoute = ({ children }) => {
    const { state } = useContext(AuthContext);
    const { isAuthenticated, loading, user } = state;
    console.log(user)

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen text-xl dark:text-white">Loading user...</div>;
    }

    // Check if authenticated and if the user's role is 'admin'
    return isAuthenticated && user && user.role === 'admin' ? children : <Navigate to="/" />;
};

export default AdminRoute;