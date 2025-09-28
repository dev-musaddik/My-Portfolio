import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../api/axiosInstance';
import DailyRoutineSection from '../sections/DailyRoutineSection'; // Import DailyRoutineSection
import AboutMeSection from '../sections/AboutMeSection';

const Dashboard = () => {
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPortfolioItems = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setError('No token found, please log in.');
                    setLoading(false);
                    return;
                }

                const config = {
                    headers: {
                        'x-auth-token': token
                    }
                };
                // This should now fetch the user's specific portfolio items
                const res = await axiosInstance.get('/portfolio/me', config);
                setPortfolioItems(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err.response ? err.response.data : err.message);
                setError('Failed to fetch portfolio items.');
                setLoading(false);
            }
        };

        fetchPortfolioItems();
    }, []);

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen text-xl text-black dark:text-white">Loading...</div>;
    }

    if (error) {
        return <div className="flex items-center justify-center min-h-screen text-red-500 dark:text-red-400 text-xl">Error: {error}</div>;
    }

    return (
        <div className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg bg-white dark:bg-black">
                <h1 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Dashboard</h1>
                <AboutMeSection />
                <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Your Portfolio Items</h2>
                {portfolioItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {portfolioItems.map(item => (
                            <div key={item.id} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600 dark:text-gray-400">No portfolio items found.</p>
                )}
            </div>
            {/* Daily Routine Section for authenticated users */}
            <div className="max-w-4xl mx-auto mt-8 p-6 rounded-lg shadow-lg bg-white dark:bg-black">
                <DailyRoutineSection />
            </div>
        </div>
    );
};

export default Dashboard;