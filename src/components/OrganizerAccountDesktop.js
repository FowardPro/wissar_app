import React, { useState, useEffect } from 'react';
import './OrganizerAccountDesktop.css';
import LogoSVG from '../assets/photos/svg/header_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faBell, faCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import InnerBody from './Innerbody';

const OrganizerAccountDesktop = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = () => {
        const headingTop = document.querySelector('.heading-top');
        const header = document.querySelector('.organizer-header');
        const headingTopPosition = headingTop.getBoundingClientRect().top;
        const headerBottomPosition = header.getBoundingClientRect().bottom;

        if (headingTopPosition <= headerBottomPosition) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="organizer-container">
            <header className="organizer-header">
                <FontAwesomeIcon icon={faBars} className="burger-icon" onClick={toggleMenu}/>
                <div className={`menu-dropdown ${menuOpen ? 'open' : ''}`}>
                <a href="#filter" className="menu-item">CREATE EVENT <FontAwesomeIcon icon={faChevronRight} className='arrow'/></a>
                <a href="#bookings" className="menu-item">MANAGE EVENT <FontAwesomeIcon icon={faChevronRight} className='arrow'/></a>                    
                    <a href="#support" className="menu-item">SUPPORT <FontAwesomeIcon icon={faChevronRight} className='arrow'/></a>
                    <a href="#settings" className="menu-item">SETTINGS <FontAwesomeIcon icon={faChevronRight} className='arrow'/></a>
                    
                </div>
                <div className="logo">
                    <img src={LogoSVG} alt="Wissar Logo" className="logo-svg" />
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
            <InnerBody isScrolled={isScrolled} menuOpen={menuOpen} />
        </div>
    );
};

export default OrganizerAccountDesktop;
