import React from 'react';
import './ArtistCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const ArtistCard = ({ image, name, title }) => {
  return (
    <div className="artist-card">
      <div className="artist-image">
        <img src={image} alt={name} className="artist-large-image" />
      </div>
      <div className="artist-info">     
        <div className="artist-name"><div className='move-right'>  <FontAwesomeIcon icon={faRocket} className='icon' /> </div><span className='artist-name-size'>{name} </span></div>
        <div className="artist-title">{title}</div>
      </div>
    </div>
  );
};

export default ArtistCard;
