import React, { useState } from 'react';
import './ArtistImage.css';

const ArtistImage = ({ image, name, video }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="artist-image-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <video className="artist-video" src={video} autoPlay muted loop/>
      ) : (
        <img src={image} alt={name} className="artist-large-image" />
      )}
    </div>
  );
};

export default ArtistImage;
