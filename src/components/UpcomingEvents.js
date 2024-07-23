import React, { useState } from 'react';
import './UpcomingEvents.css';
import eventPhoto1 from '../assets/photos/sjava.png';
import eventPhoto2 from '../assets/photos/kelvin momo.png';
import eventPhoto3 from '../assets/photos/sjava.png';
import eventPhoto4 from '../assets/photos/kelvin momo.png';
import UpcomingEventsSVG from '../assets/photos/svg/upcoming_event.svg'; // Import SVG


const UpcomingEvents = () => {
  const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="upcoming-events-container">
      <div className="header-svg">
                <img src={UpcomingEventsSVG} alt="Upcoming Events" className="header-svg-image" />
            </div>
      <div className={`events-wrapper ${showMore ? 'show-more' : ''}`}>
        <div className="event-content">
          <img src={eventPhoto1} alt="Upcoming Event" className="event-photo" />
          <div className="event-description">

    <div className="vertical-pipe-container">
      <div className="vertical-pipe">
        <div className="pipe">|</div>
          <div className="text">            
            <h2>Sjava</h2>  
              <p>              
                Join us for an amazing event featuring talented artists from around the world. <br />
                Don't miss out on this incredible experience filled with music, art, and entertainment. <br />
                Mark your calendars and get ready for an unforgettable time!
              </p>
          </div>
      </div>
    </div>


          </div>
        </div>

        <div className="event-content reverse">
          <img src={eventPhoto2} alt="Upcoming Event 2" className="event-photo1" />
          <div className="event-description1">

    <div className="vertical-pipe-container">
      <div className="vertical-pipe">
        <div className="pipe1">|</div>
          <div className="text">       
          <h2>Kelvin Momo</h2>
            <p>
              Another exciting event is coming your way! Witness spectacular performances and <br />
              immerse yourself in the vibrant culture. Stay tuned for more details and make sure <br />
              you are part of this fantastic journey.
            </p>
            </div>
      </div>
    </div>
          </div>        
        </div>

        <div className="event-content">
          <img src={eventPhoto3} alt="Upcoming Event" className="event-photo" />
          <div className="event-description">

    <div className="vertical-pipe-container">
      <div className="vertical-pipe">
        <div className="pipe">|</div>
          <div className="text">            
            <h2>Sjava</h2>  
              <p>              
                Join us for an amazing event featuring talented artists from around the world. <br />
                Don't miss out on this incredible experience filled with music, art, and entertainment. <br />
                Mark your calendars and get ready for an unforgettable time!
              </p>
          </div>
      </div>
    </div>


          </div>
        </div>

        <div className="event-content reverse">
          <img src={eventPhoto4} alt="Upcoming Event 2" className="event-photo1" />
          <div className="event-description1">

    <div className="vertical-pipe-container">
      <div className="vertical-pipe">
        <div className="pipe1">|</div>
          <div className="text">       
          <h2>Kelvin Momo</h2>
            <p>
              Another exciting event is coming your way! Witness spectacular performances and <br />
              immerse yourself in the vibrant culture. Stay tuned for more details and make sure <br />
              you are part of this fantastic journey.
            </p>
            </div>
      </div>
    </div>
          </div>        
        </div>
      </div>
      <button className={`view-more-button ${showMore ? 'fixed' : ''}`} onClick={handleViewMore}>
        {showMore ? 'SHOW LESS UPCOMING EVENTS' : 'SHOW MORE UPCOMING EVENTS'}
      </button>
    </div>
  );
};

export default UpcomingEvents;
