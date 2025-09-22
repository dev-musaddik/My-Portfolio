import React from 'react';

const BlogSection = () => (
  <div className="p-8 rounded-3xl shadow-xl space-y-12 bg-white dark:bg-black">
    <h2 className="text-5xl font-extrabold text-center mb-8 text-black dark:text-white">
      My Blog
    </h2>
    <div className="space-y-12">
      {/* Blog Post Listing */}
      <div>
        <h3 className="text-4xl font-extrabold text-black dark:text-white mb-8 text-center">
          Latest Posts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Blog Post Card */}
          <div className="rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer bg-gray-100 dark:bg-gray-800">
            <img
              src="https://placehold.co/600x400/D1E7DD/000000?text=Blog+Post+1"
              alt="Blog Post 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h5 className="text-2xl font-semibold text-black dark:text-white mb-3">Getting Started with MERN Stack</h5>
              <p className="text-gray-600 dark:text-gray-400 text-sm">By John Doe | July 05, 2025</p>
              <p className="text-gray-600 dark:text-gray-400 text-base mt-3 line-clamp-3">
                A comprehensive guide for beginners looking to dive into the world of MERN stack development.
                Learn about MongoDB, Express.js, React.js, and Node.js and how they work together.
              </p>
              <button className="mt-5 text-black dark:text-white hover:underline font-medium text-lg flex items-center group">
                Read More
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>
          </div>
          <div className="rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer bg-gray-100 dark:bg-gray-800">
            <img
              src="https://placehold.co/600x400/F8D7DA/000000?text=Blog+Post+2"
              alt="Blog Post 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h5 className="text-2xl font-semibold text-black dark:text-white mb-3">Mastering React Hooks</h5>
              <p className="text-gray-600 dark:text-gray-400 text-sm">By Jane Smith | June 28, 2025</p>
              <p className="text-gray-600 dark:text-gray-400 text-base mt-3 line-clamp-3">
                Dive deep into React Hooks and how they can simplify your component logic and state management.
                This post covers useState, useEffect, useContext, and custom hooks.
              </p>
              <button className="mt-5 text-black dark:text-white hover:underline font-medium text-lg flex items-center group">
                Read More
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>
          </div>
          <div className="rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer bg-gray-100 dark:bg-gray-800">
            <img
              src="https://placehold.co/600x400/D4EDDA/000000?text=Blog+Post+3"
              alt="Blog Post 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h5 className="text-2xl font-semibold text-black dark:text-white mb-3">Building RESTful APIs with Express.js</h5>
              <p className="text-gray-600 dark:text-gray-400 text-sm">By Alex Green | June 20, 2025</p>
              <p className="text-gray-600 dark:text-gray-400 text-base mt-3 line-clamp-3">
                Learn the best practices for designing and implementing RESTful APIs using Express.js.
                Covers routing, middleware, and connecting to databases.
              </p>
              <button className="mt-5 text-black dark:text-white hover:underline font-medium text-lg flex items-center group">
                Read More
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Post Editor (Admin View - Placeholder) */}
      <div className="p-8 rounded-2xl shadow-lg bg-gray-100 dark:bg-gray-800">
        <h3 className="text-4xl font-extrabold text-black dark:text-white mb-8 text-center">Create New Blog Post</h3>
        <form className="space-y-6">
          <div>
            <label htmlFor="postTitle" className="block text-black dark:text-white text-sm font-bold mb-2">Title</label>
            <input
              type="text"
              id="postTitle"
              className="appearance-none border border-gray-300 dark:border-gray-700 rounded-lg w-full py-3 px-4 text-black dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-black"
              placeholder="Your amazing blog post title"
            />
          </div>
          <div>
            <label htmlFor="postContent" className="block text-black dark:text-white text-sm font-bold mb-2">Content</label>
            <textarea
              id="postContent"
              rows="10"
              className="appearance-none border border-gray-300 dark:border-gray-700 rounded-lg w-full py-3 px-4 text-black dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-black"
              placeholder="Write your blog post here..."
            ></textarea>
          </div>
          <div>
            <label htmlFor="postImage" className="block text-black dark:text-white text-sm font-bold mb-2">Featured Image URL (Placeholder)</label>
            <input
              type="text"
              id="postImage"
              className="appearance-none border border-gray-300 dark:border-gray-700 rounded-lg w-full py-3 px-4 text-black dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-black"
              placeholder="e.g., https://placehold.co/600x400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-3 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-opacity-75"
          >
            Publish Post
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default BlogSection;

