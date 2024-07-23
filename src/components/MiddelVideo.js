import React from 'react';
import './MiddelVideo.css';
import videoFile from '../assets/video/Promo1.mp4';

const MiddelVideo = ({ scrollToSignUp }) => {
  return (
    <div className="video-container">
      <video className="fullscreen-video" autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>      
    </div>
  );
};

export default MiddelVideo;
