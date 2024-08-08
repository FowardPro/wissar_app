
//import { EventDetails } from '@testing-library/react';
import React, { useState } from 'react';
//import './EventDetails.css';
import './DetailsEvent.css';







function DetailsEvent() {
  const [lineup, setLineup] = useState([]);
  const [lineupInput, setLineupInput] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleAddLineup = () => {
    if (lineupInput.trim()) {
      setLineup([...lineup, lineupInput.trim()]);
      setLineupInput(''); // Clear the input field after adding
    }
  };

  const handleLineupInputChange = (e) => {
    setLineupInput(e.target.value);
  };

  const handleAdditionalInfoChange = (e) => {
    setAdditionalInfo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form submission logic
    console.log({
      eventName,
      startDate,
      endDate,
      location,
      description,
      lineup,
      additionalInfo,
    });
  };

  return (
    <div className="EventDetails">
      <form onSubmit={handleSubmit}>
        <div className="section">
          <h2>Event Details</h2>
          <div className="form-group">
            <label htmlFor="event-name">Event Name:</label>
            <input 
              type="text" 
              id="event-name"
              name="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="start-date">Start of Event:</label>
            <input 
              type="datetime-local" 
              id="start-date"
              name="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="end-date">End of Event:</label>
            <input 
              type="datetime-local" 
              id="end-date"
              name="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input 
              type="text" 
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea 
              id="description" 
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="lineup-group">
            <label htmlFor="lineup">Line Up:</label>
            <textarea 
              id="lineup" 
              name="lineup"
              value={lineupInput}
              onChange={handleLineupInputChange}
              className="lineup-textarea"
            ></textarea>
            <button 
              type="button" 
              className="add-lineup-button"
              onClick={handleAddLineup}
            >
              +
            </button>
            <ul>
              {lineup.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="form-group">
            <label htmlFor="additional-info">Additional Information:</label>
            <textarea 
              id="additional-info" 
              name="additionalInfo"
              value={additionalInfo}
              onChange={handleAdditionalInfoChange}
              rows="4"
            ></textarea>
          </div>
        </div>
        <div className="buttons">
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
}

export default DetailsEvent;
