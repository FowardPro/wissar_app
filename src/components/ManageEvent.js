import React from 'react';
import './ManageEvent.css';

const ManageEvents = () => {
  return (
    <div className="container">
      <h1 className="title">Manage Your Events</h1>
      <div className="event-card">
        <div className="event-info">
          <h2>Event Name:</h2>
          <p>Event information...</p>
        </div>
        <button className="edit-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M21.7,6.3c0.4-0.4,0.4-1,0-1.4l-2.6-2.6c-0.4-0.4-1-0.4-1.4,0l-10,10V16h3.7L21.7,6.3z M17,3l4,4L8.7,19.3H4v-4.7L17,3z" />
          </svg>
        </button>
      </div>
      <div className="event-card">
        <div className="event-info">
          <h2>Event Name:</h2>
          <p>Event information...</p>
        </div>
        <button className="edit-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M21.7,6.3c0.4-0.4,0.4-1,0-1.4l-2.6-2.6c-0.4-0.4-1-0.4-1.4,0l-10,10V16h3.7L21.7,6.3z M17,3l4,4L8.7,19.3H4v-4.7L17,3z" />
          </svg>
        </button>
      </div>
      <div className="event-card">
        <div className="event-info">
          <h2>Event Name:</h2>
          <p>Event information...</p>
        </div>
        <button className="edit-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M21.7,6.3c0.4-0.4,0.4-1,0-1.4l-2.6-2.6c-0.4-0.4-1-0.4-1.4,0l-10,10V16h3.7L21.7,6.3z M17,3l4,4L8.7,19.3H4v-4.7L17,3z" />
          </svg>
        </button>
      </div>
      <button className="saved-events-button">Saved Events</button>
    </div>
  );
};

export default ManageEvents;
