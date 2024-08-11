import React from 'react';
import './ArtistRequested.css';
import ReactDOM from 'react-dom';
import ManInBlue from '../../assets/photos/ManInBlue.jpg';
import RedLady from '../../assets/photos/RedLady.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark, faLeaf } from '@fortawesome/free-solid-svg-icons';

const ArtistRequested = () => {
    return(
      <div>

        {/*First card static display*/}
        <div className="event-card">
      <div className="event-header">
        <div className="organizer-details"> 
        <div id="organizer-row" className="organizer-info">
            <img
              src={ManInBlue}
              alt="Organizer"
              className="organizer-photo"
            />
            <div className="organizer-name-type">
                <h3>Thabo Nkazibuko <FontAwesomeIcon icon={faLeaf} style={{ color: 'blue', marginLeft: '10px' }} /></h3>
                <h5 className="organizer-type">Organizer</h5>
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
      <div id="content-row" className="content-container">
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
          <h5>Event Description</h5>
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
      <div className='image-container'>
        <img
                src={ManInBlue}
                alt="Organizer"
                className="event-image"
            />
      </div>
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
        <div id="organizer-row" className="organizer-info">
            <img
              src={RedLady}
              alt="Organizer"
              className="organizer-photo"
            />
            <div className="organizer-name-type">
                <h3>Lucy Van Lui</h3>
                <h5 className="organizer-type">Organizer</h5>
            </div>
            {/*<div className="status">
              <span className="verified">
                <FontAwesomeIcon icon={faCheck} style={{color: "#00ff11", marginRight: '10px'}} />
                Verified
              </span>
                <br></br>
              <span className="thriving">
                <FontAwesomeIcon icon={faLeaf} style={{ color: 'blue', marginRight: '10px' }} />  
                Thriving
              </span>
            </div>*/}
          </div> 
        </div>
      </div>
      <div id="content-row" className="content-container">
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
          <h5>Event Description</h5>
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
      <div className='image-container'>
        <img
                src={RedLady}
                alt="Organizer"
                className="event-image"
            />
      </div>
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
        <div id="organizer-row" className="organizer-info">
            <img
              src={ManInBlue}
              alt="Organizer"
              className="organizer-photo"
            />
            <div className="organizer-name-type">
                <h3>Peter Modau</h3>
                <h5 className="organizer-type">Organizer</h5>
            </div>
            {/*<div className="status">
              <span className="verified">
                <FontAwesomeIcon icon={faCheck} style={{color: "#00ff11", marginRight: '10px'}} />
                Verified
              </span>
                <br></br>
              <span className="thriving">
                <FontAwesomeIcon icon={faLeaf} style={{ color: 'blue', marginRight: '10px' }} />  
                Thriving
              </span>
            </div>*/}
          </div> 
        </div>
      </div>
      <div id="content-row" className="content-container">
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
          <h5>Event Description</h5>
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
      <div className='image-container'>
        <img
                src={ManInBlue}
                alt="Organizer"
                className="event-image"
            />
      </div>
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
