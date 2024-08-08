import React from 'react'
import './SearchEvents.css'
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
        <div className="searchButton-div">
            <button>SEARCH</button>
        </div>
      </div>
    </div>
  )
}

export default SearchEvents
