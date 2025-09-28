import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { updateProfileImage } from '../api/adminApi';

const AboutMeSection = () => {
  const { state, dispatch } = useContext(AuthContext);
  const { user } = state;
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('profileImage', file);

    try {
      const res = await updateProfileImage(formData);
      dispatch({ type: 'USER_UPDATED', payload: res });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="flex items-center mb-4">
        <img
          src={user?.profileImage || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-32 h-32 rounded-full mr-4"
        />
        <div>
          <input type="file" onChange={handleFileChange} />
          <button
            onClick={handleImageUpload}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
          >
            Upload Image
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold">{user?.name}</h3>
        <p className="text-gray-600">{user?.email}</p>
      </div>
    </div>
  );
};

export default AboutMeSection;
