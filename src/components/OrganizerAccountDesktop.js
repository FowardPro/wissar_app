import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './OrganizerAccountDesktop.css';
import LogoSVG from '../assets/photos/svg/header_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faBell, faCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Settings from '../components/Settings';
import Support from '../components/Support';
import Footer from '../components/Footer';
import ManageEvent from '../components/ManageEvent';
import CreateEvent from '../components/CreateEvent';
import EventDetails from '../components/EventDetails';
import OrganiserDashboard from '../components/OrganiserDashboard';

import SavedEventPage from '../components/SavedEventPage';
const OrganizerAccountDesktop = () => {
  const [showOrganiserDashboard,setShowOrganiserDashboard]= useState(true);
  const [menuOpen, setMenuOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [showManageEvent, setShowManageEvent] = useState(false);
  const [showCreateEvent,setShowCreateEvent]= useState(false);
  const [showEventDetails,setShowEventDetails]= useState(false);
  
  const [showSavedPageEvent,setShowSavedPageEvent]= useState(false);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setShowSettings(false);
    setShowSupport(false);
    setShowManageEvent(false);
    setShowCreateEvent(false);
    setShowEventDetails(false)
    setShowSavedPageEvent(false);
    setShowOrganiserDashboard(false);
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
    setShowCreateEvent(false);
    setShowEventDetails(false)
    setShowOrganiserDashboard(false)
    setShowSavedPageEvent(false);
  };

  const handleSupportClick = () => {
    setShowSupport(true);
    setShowSettings(false);
    setMenuOpen(true);
    setShowManageEvent(false);
    setShowCreateEvent(false);
    setShowEventDetails(false)
    setShowOrganiserDashboard(false)
    setShowSavedPageEvent(false);
  };

  const handleManageEventClick = () => {
    setShowSupport(false);
    setShowSettings(false);
    setMenuOpen(true);
    setShowManageEvent(true);
    setShowCreateEvent(false);
    setShowEventDetails(false)
    setShowOrganiserDashboard(false)
    setShowSavedPageEvent(false);
  };

  const handleCreateEventClick = () => {
    setShowSupport(false);
    setShowSettings(false);
    setMenuOpen(true);
    setShowManageEvent(false);
    setShowCreateEvent(true);
    setShowEventDetails(false)
  };
 

    setShowOrganiserDashboard(false)
  };
  const handleOrganiserDashboard = () => {
    setShowSavedPageEvent(false);
    setShowSupport(false);
    setShowSettings(false);
    setMenuOpen(true);
    setShowManageEvent(false);
    setShowCreateEvent(false);
    setShowOrganiserDashboard(true)
  };
  const handleSavedEventPageClick = () => {
    setShowSupport(false);
    setShowSettings(false);
    setMenuOpen(true);
    setShowManageEvent(false);
    setShowCreateEvent(false);
    setShowOrganiserDashboard(false)
    setShowSavedPageEvent(true);
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
          <Link to="/organiserDashboard" onClick={handleOrganiserDashboard} className="menu-item">HOME<FontAwesomeIcon icon={faChevronRight} className='arrow'/></Link>
            <Link to="/createEvent" onClick={handleCreateEventClick} className="menu-item">CREATE EVENT <FontAwesomeIcon icon={faChevronRight} className='arrow'/></Link>
            <Link to="/manageevent" onClick={handleManageEventClick} className="menu-item">MANAGE EVENT <FontAwesomeIcon icon={faChevronRight} className='arrow'/></Link>
            <Link to="/support" onClick={handleSupportClick} className="menu-item">SUPPORT <FontAwesomeIcon icon={faChevronRight} className='arrow'/></Link>
            <Link to="/settings" onClick={handleSettingsClick} className="menu-item">SETTINGS <FontAwesomeIcon icon={faChevronRight} className='arrow'/></Link>
            {/* <Link to="/eventedetails" onClick={handleEventDetailsClick} className="menu-item">Event Details <FontAwesomeIcon icon={faChevronRight} className='arrow'/></Link> */}
            {/* <Link to="/savedeventpage" onClick={handleSavedEventPageClick} className="menu-item">SAVED EVENT PAGE <FontAwesomeIcon icon={faChevronRight} className='arrow'/> </Link> */}
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
            showOrganiserDashboard? (
              <OrganiserDashboard isScrolled={isScrolled} menuOpen={menuOpen} />
            ) 
            :
          showSettings ? (
            <Settings isScrolled={isScrolled} menuOpen={menuOpen} />
          ) 
          : showSupport ? (
            <Support isScrolled={isScrolled} menuOpen={menuOpen} />
          ) 
          : showManageEvent ? (
            <ManageEvent isScrolled={isScrolled} menuOpen={menuOpen} />
          ) 
          :showCreateEvent ? (
            <CreateEvent isScrolled={isScrolled} menuOpen={menuOpen} />
          ) 
          :showEventDetails ? (
            <EventDetails isScrolled={isScrolled} menuOpen={menuOpen} />
          ) 
          :
          ) 
          :showSavedPageEvent? (
            <SavedEventPage isScrolled={isScrolled} menuOpen={menuOpen} />
          ) :
          (
            
            <Routes>
              <Route path="/organiserDashboard" element={<OrganiserDashboard isScrolled={isScrolled} menuOpen={menuOpen}  />} />
              <Route path="/settings" element={<Settings isScrolled={isScrolled} menuOpen={menuOpen} />} />
              <Route path="/support" element={<Support isScrolled={isScrolled} menuOpen={menuOpen} />} />
              <Route path="/manageEvent" element={<ManageEvent isScrolled={isScrolled} menuOpen={menuOpen}  />} />
              <Route path="/createEvent" element={<CreateEvent isScrolled={isScrolled} menuOpen={menuOpen}  />} />
              <Route path="/eventedetails" element={<EventDetails menuOpen={menuOpen} />} />
              
              <Route path="/SavedEventPage" element={<SavedEventPage isScrolled={isScrolled} menuOpen={menuOpen}  />} />
              {/* Add more routes as needed */}
            </Routes>
          )
          }
        </div>
        {/*<OrganiserDashboard/>*/}
        <Footer />
      </div>
    </Router>
    </div>
  );
};

export default OrganizerAccountDesktop;
