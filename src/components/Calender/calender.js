import React from 'react';
import './calendar.scss';

function Calendar() {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  let dates = [];
  for (let i = 0; i < firstDay; i++) {
    dates.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(<div key={i} className="calendar-day">{i}</div>);
  }

  return (
    <div className="calendar-container">
      <h3>{today.toLocaleString('default', { month: 'long' })} {year}</h3>
      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="calendar-header">{day}</div>
        ))}
        {dates}
      </div>
    </div>
  );
}

export default Calendar;
