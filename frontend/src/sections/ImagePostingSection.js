import React from 'react';

const ImagePostingSection = () => (
  <div className="p-8 rounded-3xl shadow-xl space-y-12 bg-white dark:bg-black">
    <h2 className="text-5xl font-extrabold text-center mb-8 text-black dark:text-white">
      Image Posting
    </h2>
    <div className="space-y-12">
      {/* Upload Area */}
      <div className="p-8 rounded-2xl shadow-lg border-2 border-dashed border-gray-400 dark:border-gray-700 text-center transition-all duration-300 hover:border-black dark:hover:border-white bg-gray-100 dark:bg-gray-800">
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">Drag & Drop your images here, or</p>
        <input type="file" id="imageUpload" className="hidden" accept="image/*" />
        <label
          htmlFor="imageUpload"
          className="inline-block bg-black dark:bg-white text-white dark:text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-opacity-75"
        >
          Browse Files
        </label>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Max file size: 5MB. Supported formats: JPG, PNG, GIF.</p>
      </div>

      {/* Image Gallery */}
      <div>
        <h3 className="text-4xl font-extrabold text-black dark:text-white mb-8 text-center">
          Your Image Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Example Image Card */}
          <div className="rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer bg-gray-100 dark:bg-gray-800">
            <img
              src="https://placehold.co/400x300/E0F2F7/000000?text=Image+1"
              alt="Uploaded Image 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-black dark:text-white text-sm font-medium truncate">Beautiful Landscape</p>
              <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">Uploaded: July 10, 2025</p>
            </div>
          </div>
          <div className="rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer bg-gray-100 dark:bg-gray-800">
            <img
              src="https://placehold.co/400x300/F8D7DA/000000?text=Image+2"
              alt="Uploaded Image 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-black dark:text-white text-sm font-medium truncate">City Skyline at Night</p>
              <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">Uploaded: July 09, 2025</p>
            </div>
          </div>
          <div className="rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer bg-gray-100 dark:bg-gray-800">
            <img
              src="https://placehold.co/400x300/E8F5E9/000000?text=Image+3"
              alt="Uploaded Image 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-black dark:text-white text-sm font-medium truncate">Abstract Art</p>
              <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">Uploaded: July 08, 2025</p>
            </div>
          </div>
          <div className="rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer bg-gray-100 dark:bg-gray-800">
            <img
              src="https://placehold.co/400x300/FFF3E0/000000?text=Image+4"
              alt="Uploaded Image 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-black dark:text-white text-sm font-medium truncate">Mountain View</p>
              <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">Uploaded: July 07, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ImagePostingSection;

