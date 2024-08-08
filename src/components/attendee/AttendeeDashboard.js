import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../OrganizerAccountDesktop.css';
import LogoSVG from '../../assets/photos/svg/header_logo.svg'
// import LogoSVG from '../assets/photos/svg/header_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faBell, faCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';
 import Settings from '../../components/Settings';
 import Support from '../../components/Support';
import Footer from  '../../components/Footer';
 import ManageEvent from '../../components/ManageEvent';
  import CreateEvent from '../../components/CreateEvent';
 import SearchEvent from '../../components/attendee/SearchEvents'

const AttendeeDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [showManageEvent, setShowManageEvent] = useState(false);
  const [showSearchEvent,setShowSearchEvent]= useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setShowSettings(false);
    setShowSupport(false);
    setShowManageEvent(false);
    setShowSearchEvent(false);
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
    setShowManageEvent(false);
    setShowSearchEvent(false);
  };

  const handleSupportClick = () => {
    setShowSupport(true);
    setShowSettings(false);
    setMenuOpen(true);
    setShowManageEvent(false);
    setShowSearchEvent(false);
  };

  const handleManageEventClick = () => {
    setShowSupport(false);
    setShowSettings(false);
    setMenuOpen(true);
    setShowManageEvent(true);
    setShowSearchEvent(false);
  };

  const handleSearchEventClick = () => {
    setShowSupport(false);
    setShowSettings(false);
    setMenuOpen(true);
    setShowManageEvent(false);
    setShowSearchEvent(true);
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
            <Link to="/searchevents" onClick={handleSearchEventClick} className="menu-item">SEARCH EVENT <FontAwesomeIcon icon={faChevronRight} className='arrow'/></Link>
            <Link to="/manageevent" onClick={handleManageEventClick} className="menu-item">SEARCH ARTIST <FontAwesomeIcon icon={faChevronRight} className='arrow'/></Link>
            <Link to="/support" onClick={handleSupportClick} className="menu-item">SUPPORT <FontAwesomeIcon icon={faChevronRight} className='arrow'/></Link>
            <Link to="/settings" onClick={handleSettingsClick} className="menu-item">SETTINGS <FontAwesomeIcon icon={faChevronRight} className='arrow'/></Link>
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

        <div className={`content ${menuOpen ? 'slide-in' : ''}`}>
          {
          showSettings ? (
            <Settings isScrolled={isScrolled} menuOpen={menuOpen} />
          ) 
          : showSupport ? (
            <Support isScrolled={isScrolled} menuOpen={menuOpen} />
          ) 
          : showManageEvent ? (
            <ManageEvent isScrolled={isScrolled} menuOpen={menuOpen} />
          ) 
          :showSearchEvent ? (
            <SearchEvent isScrolled={isScrolled} menuOpen={menuOpen} />
          ) :
          (
            <Routes>
              <Route path="/settings" element={<Settings isScrolled={isScrolled} menuOpen={menuOpen} />} />
              <Route path="/support" element={<Support isScrolled={isScrolled} menuOpen={menuOpen} />} />
              <Route path="/manageEvent" element={<ManageEvent isScrolled={isScrolled} menuOpen={menuOpen}  />} />
              <Route path="/searchevents" element={<SearchEvent isScrolled={isScrolled} menuOpen={menuOpen}  />} />
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

export default AttendeeDashboard;
