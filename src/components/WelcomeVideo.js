import React from 'react';
import './WelcomeVideo.css';
import videoFile from '../assets/video/Promo.mp4';

const WelcomeVideo = ({ scrollToSignUp }) => {
  return (
    <div className="video-container">
      <video className="fullscreen-video" autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className="signup-button" onClick={scrollToSignUp}>Join Wissa</button>
    </div>
  );
};

export default WelcomeVideo;
