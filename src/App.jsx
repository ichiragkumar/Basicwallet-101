import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Topbar } from './components/Topbar';
import { HeroPage } from './components/HeroPage';
import { SeedPhrase } from './components/SeedPhrase';
import { UserProfile } from './components/User/UserProfile';
function App() {
  return (
    <Router>
    <div className="min-h-screen bg-gray-50">
      <Topbar />
      
      <Routes>

        <Route path="/" element={<HeroPage />} /> 
        <Route path="/home" element={<HomePage />} />
        <Route path="/seedphrase" element={<SeedPhrase />} /> 
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
