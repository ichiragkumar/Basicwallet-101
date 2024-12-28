import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import darkTheme from '../assets/dark.png';
import lightTheme from '../assets/light.png';
import settings from '../assets/settings.png';

export const Topbar = () => {
  // State for managing dark or light theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to persist theme selection in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Toggle the theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <div
      className={`flex flex-wrap justify-between items-center p-4 rounded-lg shadow-lg transition-all duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white'
          : 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-800' // Darker text for light mode
      }`}
    >
      {/* First section: Logo, App Name, and Version */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <div className="text-xl font-bold">
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 bg-white rounded-full"
          />
        </div>
        <div className="text-base font-medium">Web Based Wallet App</div>
        <div className="text-sm">V1.01</div>
      </div>

      {/* Second section: Theme toggle, Settings */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-4">
          {/* Dark Theme toggle */}
          <img
            src={darkTheme}
            alt="Dark Theme"
            onClick={toggleTheme}
            className={`w-6 h-6 rounded-full cursor-pointer transition duration-300 transform ${
              isDarkMode ? 'opacity-100' : 'opacity-50'
            } hover:scale-110`}
          />
          {/* Light Theme toggle */}
          <img
            src={lightTheme}
            alt="Light Theme"
            onClick={toggleTheme}
            className={`w-6 h-6 rounded-full cursor-pointer transition duration-300 transform ${
              !isDarkMode ? 'opacity-100' : 'opacity-50'
            } hover:scale-110`}
          />
        </div>
        <div className="text-sm cursor-pointer">
          <img
            src={settings}
            alt="Settings"
            className="w-6 h-6 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
