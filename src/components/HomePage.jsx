import React from 'react';
import { Link } from 'react-router-dom'; 
export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold mb-6">Welcome to HomePage!</h1>
      <Link to="/userprofile">
        <button className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </Link>
    </div>
  );
};


