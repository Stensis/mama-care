import React, { useState } from "react";
import './dashboard.scss';
import Feedback from "../Feedback/feedback";
// import  Calendar from "../Calendar/calendar";

interface DashboardProps {
  onLogout: () => void;
}

function Dashboard(props: DashboardProps) {
  const [showQA, setShowQA] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div className="dashboard-container">
      <nav>
        <h2>Dashboard</h2>
        <button onClick={props.onLogout}>Logout</button>
      </nav>

      <section className="notifications">
        <h3>Notifications</h3>
        <div>Next Antenatal Visit: 20th September 2023</div>
      </section>

      <section className="calendar">
        <h3>Calendar</h3>
        {/* <Calendar />
         */}
         {/* <Calender /> */}

        {/* Here, you'd integrate a react calendar component */}
      </section>

      <section className="q-and-a">
        <h3>Q&A</h3>
        <button onClick={() => setShowQA(true)}>Ask a Question</button>
        {showQA && (
          <div className="modal">
            {/* Q&A Modal Content */}
            <textarea placeholder="Ask your question..."></textarea>
            <button>Submit</button>
            <button onClick={() => setShowQA(false)}>Close</button>
          </div>
        )}
      </section>

      <section className="q-and-a">
        <h3>Feedback</h3>
        <button onClick={() => setShowFeedback(true)}>Give Feedback</button>
        {showFeedback && (
          <div className="modal">
            <Feedback onClose={() => setShowFeedback(false)} />
          </div>
        )}
      </section>
      <section className="emergency-contacts">
        <h3>Emergency Contacts</h3>
        {/* List emergency contacts here */}
        
      </section>
    </div>
  );
}

export default Dashboard;
