import React, { useState, useEffect } from 'react';
import './SavedEventPage.css';

const SavedEventPage = () => {
  const [events, setEvents] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const initialEvents = [
    { id: 1, name: 'Event Name:', information: 'Event information...' },
    { id: 2, name: 'Event Name:', information: 'Event information...' },
    { id: 3, name: 'Event Name:', information: 'Event information...' },
  ];

  useEffect(() => {
    // Mimic fetching data from an API
    setEvents(initialEvents);
  }, []); // Empty array ensures this runs only once

  const handleDelete = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="saved-event-container">
      {showAll ? <h1>Manage Your Events</h1>:<h1>Saved Events</h1>} 
      <ul className="event-list">
        {events.map(event => (
            <li key={event.id} className="event-item">
              <h1>{event.name}</h1>
              <p>{event.information}</p>
              <button onClick={() => handleDelete(event.id)} className="delete-button">
                Delete
              </button>
            </li>
          ))}
      </ul>
      <button onClick={handleToggle} className="toggle-button">
        {showAll ? 'Show Saved Events' : 'All Events'}
      </button>
    </div>
  );
};

export default SavedEventPage;