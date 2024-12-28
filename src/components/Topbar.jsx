import React from 'react';
import logo from '../assets/logo.png';
import darkTheme from '../assets/dark.png';
import lightTheme from '../assets/light.png';
import settings from '../assets/settings.png';
export const Topbar = () => {
  return (
    <div className="flex flex-wrap justify-between items-center p-4 bg-white  shadow-lg rounded-lg">
      {/* First section: Logo, App Name, and Version */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <div className="text-xl font-bold text-black">
            <img src={logo} alt="Logo" className="w-8 h-8 bg-white rounded-full" />
        </div>
        <div className="text-base font-medium text-black">Web Based Wallet App</div>
        <div className="text-sm text-black">V1.01</div>
      </div>

      {/* Second section: Theme toggle, Settings, and Create Seed Phrase */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
      <div className="flex items-center space-x-4">
          <img 
            src={darkTheme} 
            alt="Dark Theme" 
            className="w-6 h-6 bg-white rounded-full cursor-pointer transition duration-300 hover:scale-110" 
          />
          <img 
            src={lightTheme} 
            alt="Light Theme" 
            className="w-6 h-6 bg-white rounded-full cursor-pointer transition duration-300 hover:scale-110" 
          />
        </div>
        <div className="text-sm text-white cursor-pointer">
            <img src={settings} alt="Settings" className="w-6 h-6 bg-white rounded-full" />
        </div>
        

      </div>
    </div>
  );
};
