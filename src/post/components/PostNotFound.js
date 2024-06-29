import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostNotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="flex w-full items-center justify-center ml-24 mt-24">
      <div className="p-8 bg-white dark:bg-gray-800 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Post Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">The post you are looking for does not exist.</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PostNotFound;
