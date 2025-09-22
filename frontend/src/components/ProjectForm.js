import React, { useState, useEffect } from 'react';

const ProjectForm = ({ project, onSave, onCancel }) => {
    const [formData, setFormData] = useState({ title: '', description: '', liveUrl: '', githubUrl: '', image: null });

    useEffect(() => {
        if (project) {
            setFormData({ title: project.title, description: project.description, liveUrl: project.liveUrl, githubUrl: project.githubUrl, image: null });
        }
    }, [project]);

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setFormData({ ...formData, image: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('liveUrl', formData.liveUrl);
        data.append('githubUrl', formData.githubUrl);
        if (formData.image) {
            data.append('image', formData.image);
        }
        onSave(data);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                <input
                    type="text"
                    id="projectTitle"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    required
                />
            </div>
            <div>
                <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                <textarea
                    id="projectDescription"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                    className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    required
                ></textarea>
            </div>
            <div>
                <label htmlFor="projectLiveUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Live URL</label>
                <input
                    type="text"
                    id="projectLiveUrl"
                    name="liveUrl"
                    value={formData.liveUrl}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
            </div>
            <div>
                <label htmlFor="projectGithubUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300">GitHub URL</label>
                <input
                    type="text"
                    id="projectGithubUrl"
                    name="githubUrl"
                    value={formData.githubUrl}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
            </div>
            <div>
                <label htmlFor="projectImage" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Image</label>
                <input
                    type="file"
                    id="projectImage"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="mt-1 block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
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

export default ProjectForm;
