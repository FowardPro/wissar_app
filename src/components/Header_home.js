import React, { useState } from 'react';
import './OrganizerAccountDesktop.css';
import LogoSVG from '../assets/photos/svg/header_logo.svg'; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faBell, faCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faBars, faUser, faCheck, faBell, faChevronRight);

const OrganizerAccountDesktop = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="organizer-container">
            <header className="organizer-header">
                <FontAwesomeIcon
                    icon={faBars}
                    className="burger-icon"
                    onClick={toggleMenu}
                />
                <div className={`menu-dropdown ${menuOpen ? 'open' : ''}`}>
                    <a href="#filter" className="menu-item">
                        FILTER <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
                    </a>
                    <a href="#bookings" className="menu-item">
                        BOOKINGS <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
                    </a>
                    <a href="#support" className="menu-item">
                        SUPPORT <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
                    </a>
                    <a href="#settings" className="menu-item">
                        SETTINGS <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
                    </a>
                </div>
                <div className="logo">
                    <img 
                        src={LogoSVG} // Correct path to your SVG
                        alt="Wissar Logo"
                        className="logo-svg" 
                    />
                </div>
                <div className="user-section">
                    <FontAwesomeIcon icon={faUser} className="user-icon" />
                    <div className="user-details">
                        <span className="user-name">Zenzo <FontAwesomeIcon icon={faCheck} className="check-icon" /></span>
                        <span className="user-account">Organizer Account</span>
                    </div>
                    <div className="notification">
                        <FontAwesomeIcon icon={faBell} className="bell-icon" />
                        <span className="notification-count">23</span>
                    </div>
                </div>
            </header>
            <main>
                {/* Add the rest of your page content here */}
                <div className='main-page'>

                    <div className='heading-top'>
                        <h1>
                            Artists...
                        </h1>
                    </div>
                    

                </div>
            </main>
        </div>
    );
};

export default OrganizerAccountDesktop;
