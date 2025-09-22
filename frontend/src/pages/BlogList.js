import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../api/axiosInstance';
import { Link } from 'react-router-dom';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axiosInstance.get('/blog');
                setBlogs(res.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching blogs:', err);
                setError('Failed to load blog posts.');
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return <div className="text-center dark:text-white">Loading blog posts...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="blog-list p-4">
            <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">Blog Posts</h1>
            {blogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <div key={blog._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                            {blog.image && (
                                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                            )}
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2 dark:text-white">{blog.title}</h2>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                    By {blog.author ? blog.author.name : 'Unknown'} on {new Date(blog.date).toLocaleDateString()}
                                </p>
                                <p className="text-gray-700 dark:text-gray-400 mb-4">
                                    {blog.content.substring(0, 150)}... {/* Show a snippet */}
                                </p>
                                <Link to={`/blog/${blog._id}`} className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center dark:text-white">No blog posts found.</p>
            )}
        </div>
    );
};

export default BlogList;