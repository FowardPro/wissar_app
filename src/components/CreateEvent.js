import React from 'react'
import './CreateEvent.css'
import { FiPlusCircle } from "react-icons/fi";
import {  Link } from 'react-router-dom';


const CreateEvent = () => {
  return (
    <div className="createEventPage-container">
          <div className="heading">Create Event</div>
         <div className="createEventPage">
        
        <div className="form-container">
          <form>
          <div className="inputs-div">
            <h2>Create Event</h2>
            <div className="form-group">
              <label htmlFor="eventName">Event Name:</label>
              <input type="text" id="eventName" name="eventName" />
            </div>
    
            <div className="form-group">
              <label htmlFor="startEvent">Start of event:</label>
              <input type="datetime-local" id="startEvent" name="startEvent" />
            </div>
    
            <div className="form-group">
              <label htmlFor="endEvent">End of event:</label>
              <input type="datetime-local" id="endEvent" name="endEvent" />
            </div>
    
            <div className="form-group">
              <label htmlFor="location">Location:</label>
              <input type="text" id="location" name="location" />
            </div>
    
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description"></textarea>
            </div>
    
            <div className="form-group">
              <label htmlFor="lineUp">Line up:</label>
              <input type="text" id="lineUp" name="lineUp" />
              <div className="plus-icon">
              <Link to={'/searchartistresults'}>
               <FiPlusCircle size={25}/>
              </Link>
              </div>
              
            </div>
            </div>
            
            <div className="button-container">
              <Link to={'/manageevent'}>
              <button type="submit">Submit</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
   

  )
}

export default CreateEvent
