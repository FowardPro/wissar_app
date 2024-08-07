import React from 'react';
import './Support.css'; // Optional: for custom styling

function SupportPage() {
  return (
    <div className="support-page">
      <header className="support-header">
        <h1>Contact Us...</h1>
      </header>
      <section className="support-content">
        <p2>Thank you for your interest in wissar wissar developed by Tech Solutions. Wether you 
          have questions feedback or inquiries about our web application. we're here to
          assist you. Please feel free to reach out to us using the Contact details below:</p2>
          
        <div className="support-container">
          <p>
            <span style ={{color: 'red'}}>Email </span> 
            :info@techsolutions.co.za</p>
            <p>
              <span style={{color: 'red'}}>Phone </span>
              :+27(011)3556087</p>
              <p>
                <span style={{color: 'red'}}>Address </span>
                :1 Bernard Avenue, Dawn Park, Gauteng,1475
              </p>
          
        </div>
      </section>
    </div>
  );
}
export default SupportPage;