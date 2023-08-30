import React from 'react';
import './feedback.scss';

interface FeedbackProps {
  onClose: () => void;
}

function Feedback(props: FeedbackProps) {
  return (
    <div className="modal">
      <h3>Feedback</h3>
      <textarea placeholder="Share your experience..."></textarea>
      <button>Submit</button>
      <button onClick={props.onClose}>Close</button>
    </div>
  );
}

export default Feedback;
