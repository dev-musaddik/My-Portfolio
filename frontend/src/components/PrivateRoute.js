import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { state } = useContext(AuthContext);
    const { isAuthenticated, loading } = state;

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen text-xl dark:text-white">Loading user...</div>;
    }

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;