import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../api/axiosInstance';

const BlogDetail = () => {
    const { id } = useParams(); // Get the blog ID from the URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axiosInstance.get(`/blog/${id}`);
                setBlog(res.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching blog:', err);
                setError('Failed to load blog post.');
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]); // Re-fetch when ID changes

    if (loading) {
        return <div className="text-center dark:text-white">Loading blog post...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    if (!blog) {
        return <div className="text-center dark:text-white">Blog post not found.</div>;
    }

    return (
        <div className="blog-detail p-4">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                {blog.image && (
                    <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover rounded-lg mb-6" />
                )}
                <h1 className="text-3xl font-bold mb-4 dark:text-white">{blog.title}</h1>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                    By {blog.author ? blog.author.name : 'Unknown'} on {new Date(blog.date).toLocaleDateString()}
                </p>
                <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-400">
                    <p>{blog.content}</p>
                    {/* Render content with proper formatting if it contains markdown/HTML */}
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;