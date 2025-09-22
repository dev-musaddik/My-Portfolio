import React, { useState, useEffect, useContext } from 'react';
import { axiosInstance } from '../api/axiosInstance';
import { AuthContext } from '../context/AuthContext';

const DailyRoutineSection = () => {
    const { state: { user, isAuthenticated } } = useContext(AuthContext);
    const [dailyRoutine, setDailyRoutine] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isAuthenticated && user) {
            fetchDailyRoutine();
        } else if (!isAuthenticated && !user) {
            setLoading(false); // Not authenticated, so no routine to load
        }
    }, [isAuthenticated, user]);

    const fetchDailyRoutine = async () => {
        setLoading(true);
        try {
            const res = await axiosInstance.get('/daily-routine/me');
            setDailyRoutine(res.data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching daily routine:', err);
            setError('Failed to load daily routine.');
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="text-center dark:text-white">Loading daily routine...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    if (!isAuthenticated) {
        return <div className="text-center dark:text-white">Please log in to view your daily routine.</div>;
    }

    if (!dailyRoutine || dailyRoutine.activities.length === 0) {
        return <div className="text-center dark:text-white">No daily routine set up yet.</div>;
    }

    return (
        <section id="daily-routine" className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Your Daily Routine</h2>
                <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Date: {new Date(dailyRoutine.date).toLocaleDateString()}</p>
                    <ul className="space-y-4">
                        {dailyRoutine.activities.map((activity, index) => (
                            <li key={index} className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-700 rounded-md shadow-sm">
                                <div className="flex-grow">
                                    <p className="text-xl font-semibold text-gray-800 dark:text-white">{activity.name}</p>
                                    <p className="text-gray-600 dark:text-gray-400">{activity.time}</p>
                                </div>
                                {activity.completed ? (
                                    <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium">Completed</span>
                                ) : (
                                    <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm font-medium">Pending</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default DailyRoutineSection;