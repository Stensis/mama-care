import React, { useState } from 'react';
import {  Route, Routes, Navigate } from 'react-router-dom';
import RegistrationForm from './components/Registration/register';
import Dashboard from './components/Dashboard/dashboard';
import Feedback from './components/Feedback/feedback';
import HomePage from './components/Homepage/homepage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false); 
};

  return (
      <div className="app-container">

        <Routes>
          <Route path="/register" element={<RegistrationForm />} />

          <Route path="/dashboard" element={loggedIn ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/" />} />


          <Route path="/feedback" element={<Feedback onClose={() => { /* Handle close behavior */ }} />} />

          <Route path="/" element={loggedIn ? <Navigate to="/dashboard" /> : <HomePage onLogin={handleLogin} />} />
        </Routes>
      </div>
  );
}

export default App;
