import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Topbar } from './components/Topbar';
import { HeroPage } from './components/HeroPage';
import { UserProfile } from './components/User/UserProfile';

import { EthWallet } from './components/EthWallet';
import { SolanaWallet } from './components/SolanaWallet';
function App() {
  
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Topbar />
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HeroPage />} /> 
          <Route path="/home" element={<HomePage />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/eth" element={<EthWallet />} />
          <Route path="/sol" element={<SolanaWallet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
