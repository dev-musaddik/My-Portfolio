import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute'; // Import AdminRoute
import ScrollProgressBar from './components/ScrollProgressBar';
import PortfolioSection from './sections/PortfolioSection';
import AdminDashboard from './pages/AdminDashboard';
import BlogList from './pages/BlogList'; // Import BlogList
import BlogDetail from './pages/BlogDetail'; // Import BlogDetail

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-black">
                    <ScrollProgressBar />
                    <Navbar />
                    <main className="flex-grow container mx-auto p-4 md:p-8 mt-8">
                        <Routes>
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                            <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
                            <Route path="/blogs" element={<BlogList />} /> {/* Blog List Route */}
                            <Route path="/blog/:id" element={<BlogDetail />} /> {/* Blog Detail Route */}
                            <Route path="/" element={<PortfolioSection />} />
                        </Routes>
                    </main>
                    <footer className="bg-white dark:bg-black text-black dark:text-white p-4 text-center rounded-t-2xl mx-4 mb-4 mt-8 shadow-xl">
                        <div className="container mx-auto">
                            <p className="text-gray-400">&copy; {new Date().getFullYear()} My MERN Portfolio. All rights reserved.</p>
                        </div>
                    </footer>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
