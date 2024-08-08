import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp, faShare, faComment, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {  faShare, faComment } from '@fortawesome/free-solid-svg-icons';
import './EventDetails.css';


const EventDetails = ({ event }) => {
  return (
    <div>
      <div className="orgevent-details">
        <h2 className='header99'>About Event . . .</h2>
        <p>🎉🧇 Join <strong>{event.host}</strong> for a Good Time! 🥞</p>
        <p> 📅 <strong className='space'>Date: </strong> {event.date}</p>
        <p> 🕒 <strong className='space'>Time: </strong> {event.time}</p>
        <p> 📍 <strong className='space'>Location: </strong> {event.location}</p>
        <p>  {event.description}</p>
        <p>  {event.description1}</p>
        <p>  {event.description2}</p>
        <p>  {event.description3}</p>
      </div>
      <div className="event-actions">
        {/* <button><FontAwesomeIcon icon={faThumbsUp} /> Like</button> */}
        <button><FontAwesomeIcon icon={faShare} /> Share</button>    
        <button><FontAwesomeIcon icon={faComment} /> Chat</button>
        {/* <button><FontAwesomeIcon icon={faUserPlus} /> Follow</button> */}
      </div>
    </div>
  );
};

export default EventDetails;
