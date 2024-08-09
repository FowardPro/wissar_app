import React, { useState } from 'react';
import './ArtistSchedule.css';

const EventModal = ({isOpen, onClose, onSave, initialDate}) => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState(initialDate || '');

    const handleSave = () => {
        onSave(eventDate, eventDate);
        setEventName('');
        setEventDate();
    };

    if (!isOpen) {
        return null;
      }
    
      return (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Event</h2>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="Event Name"
            />
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </div>
      );
    };
    
    const Calendar = () => {
      const [selectedDate, setSelectedDate] = useState(null);
      const [events, setEvents] = useState({});
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [currentDate, setCurrentDate] = useState(new Date());
    
      const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    
      const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
      };
    
      const handleDateClick = (day) => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; // Months are zero-based in JS
        const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    
        setSelectedDate(formattedDate);
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };
    
      const handleSaveEvent = (date, eventName) => {
        const day = new Date(date).getDate();
        setEvents((prevEvents) => ({
            ...prevEvents,
            [day]: eventName, // Store the event under the day only
        }));
        setIsModalOpen(false);
    };
    
    
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const daysInMonth = getDaysInMonth(year, month);
    
      return (
        <div className="calendar">
          <header className="calendar-header">
            <h1>Gig Guide</h1>
          </header>
          <div className="calendar-controls">
            <span className="invisible-button"></span>
            <span>{currentDate.toLocaleString('default', { month: 'long' })} {year}</span>
            <span className="invisible-button"></span>
          </div>
          <div className="calendar-grid">
            {daysOfWeek.map((day) => (
              <div key={day} className="day">
                {day}
              </div>
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
              <div key={day} className="date" onClick={() => handleDateClick(day)}>
                  {day}
                  {events[day] && (
                      <div className="event-name">{events[day]}</div> // Show event name for that day
                  )}
              </div>
            ))}
          </div>
          <EventModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSave={handleSaveEvent}
            initialDate={selectedDate}
          />
        </div>
      );
    };
    
    export default Calendar;
