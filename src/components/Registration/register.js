import React from 'react';
import './registrationForm.scss';

function RegistrationForm() {
  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <input type="text" placeholder="Enter mobile number" />
      <div>
        <label>
          Receive voice notifications?
          <input type="checkbox" />
        </label>
      </div>
      <button>Register</button>
    </div>
  );
}

export default RegistrationForm;
