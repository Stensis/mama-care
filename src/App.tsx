import React from 'react';
import '.';
import RegistrationForm from './components/Registration/register';
import Dashboard from './components/Dashboard/dashboard';
import Feedback from './components/Feedback/feedback';

function App() {
  return (
    <div className="app-container">
      <h1>Maternal Health Care App</h1>
      <RegistrationForm />
      <Dashboard />
      <Feedback />
    </div>
  );
}

export default App;
