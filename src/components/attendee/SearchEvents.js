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
        <h2>Suggested Events</h2>
        <div className="searchevent-cards">
            
            <div className="event-cards">
                <h3>TUT Fresher's Bash 2024</h3>
                <div className="image-paragraps">
                <img src={eventpic} alt="Event picture"></img>
                <div className="search-paragraps">
                <p>TUT Fresher's(Pretoria. Arcadia. Arts)</p>
                <p>Friday 10 May 2024, 16:00 PM-</p>
                <p>Sat 11 May 2024, 06:00 AM</p>
                </div>
                </div> 
                
            </div>
            
            <div className="event-cards">
                <h3>Black & White Lifestyle boat Cruise</h3>
                <div className="image-paragraps">
                <img src={eventpic} alt="Event picture"></img>
                <div className="search-paragraps">
                <p>Black & White Lifestyle boat Cruise:</p>
                <p>Sat 17 August 2024, 15:00 PM</p>
                <p>Sun 18 August 2024, 02:00 AM</p>
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
