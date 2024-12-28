import React, { useState } from 'react';
import './App.css';
import { generateMnemonic } from 'bip39';
import { Topbar } from './components/Topbar';
import { HeroPage } from './components/HeroPage';
function App() {

  return (
    <div className="min-h-screen bg-gray-50">

      <Topbar />
      <HeroPage />
    </div>
  );
}

export default App;
