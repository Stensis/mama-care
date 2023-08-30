import React from 'react';
import './feedback.scss';

function Feedback() {
  return (
    <div className="feedback-container">
      <h2>Feedback</h2>
      <textarea placeholder="Share your experience..."></textarea>
      <button>Submit</button>
    </div>
  );
}

export default Feedback;
