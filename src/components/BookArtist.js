import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../components/BookArtist.css';

const BookArtist = () => {
  return (
    <div className="book-artist">
      <div className='ba'><FontAwesomeIcon icon={faPlus} className='icon-plus'/></div>
      <div>Book Artist</div>
    </div>
  );
};

export default BookArtist;
