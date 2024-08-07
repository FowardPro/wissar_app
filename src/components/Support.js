import React from 'react';
import './Support.css';
import contactImage from '../assets/photos/Image.png';

function Support() {
  return (
    <div>
    <div className="heading">Support</div>
    <div className="support-cotainer">
    <div className="supportPage flex">
      <div className="container flex">
        <div className="imageDiv">
          <img src={contactImage} alt="contacts image" />
        </div>

        <div className="contactsDiv">
          <h2>Contact Us...</h2>

          <p>
            Thank you for your interest in Wissar developed by Tech Solutions.
            <br />
            Whether you have questions, feedback, or inquiries about our web application,
            <br />
            we're here to assist you. Please feel free to reach out to us using the contact details below:
          </p>

          <div className="contactUs">
            <div className="textDiv">
              <p>
                <span>Email:</span> info@techsolutions.co.za
                <br />
                <span>Phone:</span> +27 (011) 355 6087
                <br />
                <span>Address:</span> 1 Bernard Avenue, Dawn Park, Gauteng, 1475
              </p>
            </div>
          </div>

          <p>
            Our dedicated team looks forward to hearing from you and
            <br />
            providing any assistance you may need regarding Wissar.
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Support;
