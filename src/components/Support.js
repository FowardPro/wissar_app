<<<<<<< HEAD
import React from 'react';
import InnerBody from '../components/Innerbody.js';
=======
import  './Support.css'
import contactImage from '../assets/photos/Image.png'

function Support() {
  return (
    <div className="supportPage flex">
        <div className="container flex">

>>>>>>> d035f744efc8e0289f26ba005744eafd7018e5d4

          <div className="imageDiv">
          <img src={contactImage} alt="contacts image" />
          </div>

      <div className="contactsDiv">

      <h2>
          Contact Us...
       </h2>

        <p>
        Thank you for your interest in Wissar developed by Tech Solutions.<br/>
        Whether you have a questions feedback or inquiries about our web application.<br/>
        We're here to assist you. Please feel free to reach out to us using the contact details below:
        </p>

        <div className="contactUs">

        <div className="textDiv">

         <p> <span>Email:</span> info@techsolutions.co.za
         <br/>
         <span>Phone:</span>  +27 (011) 355 6087
          <br/>
          <span>Address:</span> 1 Bernard Avenue, Dawn Park, Gauteng, 1475
          </p>

        </div>

      </div>
        
          
       <p>
       Our dedicated team looks forward to hearing from you and<br/>
       providing any assistance you may need regarding Wissar.
      </p> 
      
      </div>

      
     
    </div>
    </div>
    
  );
}

export default Support;
