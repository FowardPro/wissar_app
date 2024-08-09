import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import './OrganizerAccountDesktop.css';
import LogoSVG from '../assets/photos/svg/header_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ArtistHomePage.css';
import { faBars, faUser, faBell, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Settings from './Settings';
import Support from './Support';
import Footer from './Footer';
import ArtistRequested from './artist/ArtistRequested';
import ArtistAccepted from './artist/ArtistAccepted';
import ArtistSchedule from './artist/ArtistSchedule';


const ArtistHome = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [showBookingsDropdown, setShowBookingsDropdown] = useState(false);

  const handleBookingsClick = () => {
    setShowBookingsDropdown(!showBookingsDropdown);
  };

  const handleTabClick = (tabName) => {
    // Handle tab click logic here, for example:
    console.log('Clicked tab:', tabName);
    // You might want to update state or perform other actions based on the clicked tab
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setShowSettings(false);
    setShowSupport(false);
  };

  const handleScroll = () => {
    const headingTop = document.querySelector('.heading-top');
    const header = document.querySelector('.organizer-header');

    if (headingTop && header) {
      const headingTopPosition = headingTop.getBoundingClientRect().top;
      const headerBottomPosition = header.getBoundingClientRect().bottom;
      setIsScrolled(headingTopPosition <= headerBottomPosition);
    }
  };

  const handleSettingsClick = () => {
    setShowSettings(true);
    setShowSupport(false);
    setMenuOpen(true);
  };

  const handleSupportClick = () => {
    setShowSupport(true);
    setShowSettings(false);
    setMenuOpen(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='organiser-container'>
    <Router>
      <div className="organizer-container">
        <header className="organizer-header">
          <FontAwesomeIcon icon={faBars} className="burger-icon" onClick={toggleMenu} />
          <div className={`menu-dropdown ${menuOpen ? 'open' : ''}`}>
          <div className="menu-item" onClick={handleBookingsClick}>
                BOOKINGS <FontAwesomeIcon icon={faChevronRight} className='arrow' />
                {showBookingsDropdown && (
                  <div className="dropdown-content">
                    <Link to="/artistrequested" onClick={() => handleTabClick('ArtistRequested')}>Requested</Link>
                    <Link to="/artistaccepted" onClick={() => handleTabClick('ArtistAccepted')}>Accepted</Link>
                    <Link to="/artistschedule" onClick={() => handleTabClick('ArtistSchedule')}>Schedule</Link>
                  </div>
                )}
              </div>
            <Link to="/support" onClick={handleSupportClick} className="menu-item">SUPPORT </Link>
            <Link to="/settings" onClick={handleSettingsClick} className="menu-item">SETTINGS</Link>
            
          </div>
          <div className="logo">
            {<img src={LogoSVG} alt="Wissar Logo" className="logo-svg" />}
          </div>
          <div className="user-section">
          <div className="user-details">
              <span className="user-name">Precious </span>
              <span className="user-account">Artist</span>
            </div>
            <div className="user-rate">
              <span><FontAwesomeIcon icon={faUser} className="user-icon" /></span>
              <span className="rate-stars">⭐⭐⭐⭐⭐</span>
            </div>
            <div className="notification">
              <FontAwesomeIcon icon={faBell} className="bell-icon" />
              <span className="notification-count">1</span>
            </div>
          </div>
        </header>

        <div className={`content ${menuOpen ? 'slide-in' : ''}`}>
          {
          showSettings ? (
            <Settings isScrolled={isScrolled} menuOpen={menuOpen} />
          ) 
          : showSupport ? (
            <Support isScrolled={isScrolled} menuOpen={menuOpen} />
          ) 
          :
          (
            
            <Routes>
              <Route path="/settings" element={<Settings isScrolled={isScrolled} menuOpen={menuOpen} />} />
              <Route path="/support" element={<Support isScrolled={isScrolled} menuOpen={menuOpen} />} />
              <Route path="/artistrequested" element={<ArtistRequested isScrolled={isScrolled} menuOpen={menuOpen} />} />
              <Route path="/artistaccepted" element={<ArtistAccepted isScrolled={isScrolled} menuOpen={menuOpen} />} />
              <Route path="/artistschedule" element={<ArtistSchedule isScrolled={isScrolled} menuOpen={menuOpen} />} />
              {/* Add more routes as needed */}
            </Routes>
          )
          }
        </div>
        
        <Footer />
      </div>
    </Router>
    </div>
  );
};

export default ArtistHome;
