import React from 'react';
import './ManageEvent.css';

const ManageEvent = () => {
    return (
        <div className="manage-events-container">
            <h2>Manage Your Events</h2>
            <div className="event-card">
                <div className="event-details">
                    <h3>Event Name:</h3>
                    <p>Event information...</p>
                </div>
                <div className="edit-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M12 20H21"></path>
                        <path d="M16.5 3.5L20.5 7.5 7 21 3 21 3 17z"></path>
                    </svg>
                </div>
            </div>
            <div className="event-card">
                <div className="event-details">
                    <h3>Event Name:</h3>
                    <p>Event information...</p>
                </div>
                <div className="edit-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M12 20H21"></path>
                        <path d="M16.5 3.5L20.5 7.5 7 21 3 21 3 17z"></path>
                    </svg>
                </div>
            </div>
            <div className="event-card">
                <div className="event-details">
                    <h3>Event Name:</h3>
                    <p>Event information...</p>
                </div>
                <div className="edit-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M12 20H21"></path>
                        <path d="M16.5 3.5L20.5 7.5 7 21 3 21 3 17z"></path>
                    </svg>
                </div>
            </div>
            <button className="saved-events-button">Saved Events</button>
        </div>
    );
}

export default ManageEvent;
