import React, { useState, useEffect } from 'react';

const SkillForm = ({ skill, onSave, onCancel }) => {
    const [formData, setFormData] = useState({ name: '', level: 0 });

    useEffect(() => {
        if (skill) {
            setFormData({ name: skill.name, level: skill.level });
        }
    }, [skill]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="skillName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                    type="text"
                    id="skillName"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    required
                />
            </div>
            <div>
                <label htmlFor="skillLevel" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Level (%)</label>
                <input
                    type="number"
                    id="skillLevel"
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    required
                />
            </div>
            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={onCancel}
                    className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                    Save
                </button>
            </div>
        </form>
    );
};

export default SkillForm;
