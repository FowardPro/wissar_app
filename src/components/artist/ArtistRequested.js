import React from 'react';
import './ArtistRequested.css';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark, faLeaf } from '@fortawesome/free-solid-svg-icons';

const ArtistRequested = () => {
    return(
      <div>

        {/*First card static display*/}
        <div className="event-card">
      <div className="event-header">
        <div className="organizer-details">
          <img
            src="https://via.placeholder.com/150"
            alt="Organizer"
            className="organizer-photo"
          />
          <div className="organizer-info">
            <div className="organizer-name">
                <h3>Thabo Nkazibuko</h3>
                <span className="thriving-icon">
                  <FontAwesomeIcon icon={faLeaf} style={{ color: 'blue' }} />
              </span>
            </div>
            <div className="organizer-type">
                <h5>Organizer</h5>
            </div>
            <div className="status">
              <span className="verified">
                <FontAwesomeIcon icon={faCheck} style={{color: "#00ff11", marginRight: '10px'}} />
                Verified
              </span>
                <br></br>
              <span className="thriving">
                <FontAwesomeIcon icon={faLeaf} style={{ color: 'blue', marginRight: '10px' }} />  
                Thriving
              </span>
            </div>
          </div> 
        </div>
      </div>
      <div className="content-container">
      <div className="event-title-container">
        
        <div className="event-details-container">
        <div className="event-title">
          <h2>Event name 1</h2>
        </div>
          <div className="event-details">
            <p>🎉 Join us for Good Time! 🎉</p>
            <p>📅 Date: Saturday, August 10, 2024</p>
            <p>⏰ Time: 10:00 AM - 4:00 PM</p>
            <p>📍 Location: Wonderland, 123 Maple Avenue, Sunnyvale</p>
            
        <div className="description-title">
          <h3>Event Description</h3>
        </div>
            <p className="event-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className='image-container'>
        <img
                src="https://via.placeholder.com/150"
                alt="Organizer"
                className="event-image"
            />
      </div>
      
      <div className="event-actions">
        <button className="accept-button">
          <FontAwesomeIcon icon={faCheck} style={{color: "#00ff11", marginRight: '15px'}} /> Accept Offer
        </button>
        <button className="decline-button">
          <FontAwesomeIcon icon={faXmark} style={{color: "#ff1100", marginRight: '15px'}} /> Decline Offer
        </button>
      </div>
    </div>

     
    {/*Second card static display*/}
    <div className="event-card">
      <div className="event-header">
        <div className="organizer-details">
          <img
            src="https://via.placeholder.com/150"
            alt="Organizer"
            className="organizer-photo"
          />
          <div className="organizer-info">
            <div className="organizer-name">
                <h3>Thabo Nkazibuko</h3>
                <span className="thriving-icon">
                  <FontAwesomeIcon icon={faLeaf} style={{ color: 'blue' }} />
              </span>
            </div>
            <div className="organizer-type">
                <h5>Organizer</h5>
            </div>
            <div className="status">
              <span className="verified">
                <FontAwesomeIcon icon={faCheck} style={{color: "#00ff11", marginRight: '10px'}} />
                Verified
              </span>
                <br></br>
              <span className="thriving">
                <FontAwesomeIcon icon={faLeaf} style={{ color: 'blue', marginRight: '10px' }} />  
                Thriving
              </span>
            </div>
          </div> 
        </div>
      </div>
      <div className="content-container">
      <div className="event-title-container">
        
        <div className="event-details-container">
        <div className="event-title">
          <h2>Event name 1</h2>
        </div>
          <div className="event-details">
            <p>🎉 Join us for Good Time! 🎉</p>
            <p>📅 Date: Saturday, August 10, 2024</p>
            <p>⏰ Time: 10:00 AM - 4:00 PM</p>
            <p>📍 Location: Wonderland, 123 Maple Avenue, Sunnyvale</p>
            
        <div className="description-title">
          <h3>Event Description</h3>
        </div>
            <p className="event-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className='image-container'>
        <img
                src="https://via.placeholder.com/150"
                alt="Organizer"
                className="event-image"
            />
      </div>
      
      <div className="event-actions">
        <button className="accept-button">
          <FontAwesomeIcon icon={faCheck} style={{color: "#00ff11", marginRight: '15px'}} /> Accept Offer
        </button>
        <button className="decline-button">
          <FontAwesomeIcon icon={faXmark} style={{color: "#ff1100", marginRight: '15px'}} /> Decline Offer
        </button>
      </div>
    </div>
   
    {/*Thired card static display*/}
    <div className="event-card">
      <div className="event-header">
        <div className="organizer-details">
          <img
            src="https://via.placeholder.com/150"
            alt="Organizer"
            className="organizer-photo"
          />
          <div className="organizer-info">
            <div className="organizer-name">
                <h3>Thabo Nkazibuko</h3>
                <span className="thriving-icon">
                  <FontAwesomeIcon icon={faLeaf} style={{ color: 'blue' }} />
              </span>
            </div>
            <div className="organizer-type">
                <h5>Organizer</h5>
            </div>
            <div className="status">
              <span className="verified">
                <FontAwesomeIcon icon={faCheck} style={{color: "#00ff11", marginRight: '10px'}} />
                Verified
              </span>
                <br></br>
              <span className="thriving">
                <FontAwesomeIcon icon={faLeaf} style={{ color: 'blue', marginRight: '10px' }} />  
                Thriving
              </span>
            </div>
          </div> 
        </div>
      </div>
      <div className="content-container">
      <div className="event-title-container">
        
        <div className="event-details-container">
        <div className="event-title">
          <h2>Event name 1</h2>
        </div>
          <div className="event-details">
            <p>🎉 Join us for Good Time! 🎉</p>
            <p>📅 Date: Saturday, August 10, 2024</p>
            <p>⏰ Time: 10:00 AM - 4:00 PM</p>
            <p>📍 Location: Wonderland, 123 Maple Avenue, Sunnyvale</p>
            
        <div className="description-title">
          <h3>Event Description</h3>
        </div>
            <p className="event-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className='image-container'>
        <img
                src="https://via.placeholder.com/150"
                alt="Organizer"
                className="event-image"
            />
      </div>
      
      <div className="event-actions">
        <button className="accept-button">
          <FontAwesomeIcon icon={faCheck} style={{color: "#00ff11", marginRight: '15px'}} /> Accept Offer
        </button>
        <button className="decline-button">
          <FontAwesomeIcon icon={faXmark} style={{color: "#ff1100", marginRight: '15px'}} /> Decline Offer
        </button>
      </div>
    </div>
    
    </div> 
    );  
    
};


ReactDOM.render(<ArtistRequested />, document.getElementById('root'));
export default ArtistRequested;
