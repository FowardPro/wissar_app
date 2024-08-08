import React from 'react'
import './SearchEvents.css'
import eventpic from '../../assets/photos/sjava.png'
import { FcSearch } from "react-icons/fc";
function SearchEvents() {
  return (
    <div className="searchEventsPage">
      <h2>Search Events</h2>
      <div className="searchEvents-container">
        <div className="searchEvents-div">
        <FcSearch size={50}/>
        <input placeholder="Search the event you want to view"/>
        </div>
        <div className="searchevent-cards">
            <h2>Suggeted Events</h2>
            <div className="event-cards">
                <h3>EVENT NAME</h3>
                <div className="image-paragraps">
                <img src={eventpic} alt="Event picture"></img>
                <div className="search-paragraps">
                <p>Location:</p>
                <p>Start Date:</p>
                <p>End Date:</p>
                </div>
                </div> 
                
            </div>
            
            <div className="event-cards">
                <h3>EVENT NAME</h3>
                <div className="image-paragraps">
                <img src={eventpic} alt="Event picture"></img>
                <div className="search-paragraps">
                <p>Location:</p>
                <p>Start Date:</p>
                <p>End Date:</p>
                </div>
                </div> 
                
            </div>
        </div>
        <div className="searchButton-div">
            <button>SEARCH</button>
        </div>
      </div>
    </div>
  )
}

export default SearchEvents
