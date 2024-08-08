import React from 'react';
import '../components/Key.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faCheck } from '@fortawesome/free-solid-svg-icons';

const Keys = () => {
  return (
    <div className="keys">
      <h3>Keys:</h3>
      <ul>
        <li>
          <FontAwesomeIcon icon={faCheck} className='icon' />
          <span className='keys-1'>Organizer</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faRocket} className='icon' />
          <span className='keys-1'>Thriving</span>
        </li>
      </ul>
    </div>
  );
};

export default Keys;
