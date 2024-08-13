import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './OrganizerAccountDesktop.css';
import LogoSVG from '../assets/photos/svg/header_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faBell, faCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Settings from '../Settings';
import Support from '../Support';
import Footer from '../Footer';
import ManageEvent from '../components/ManageEvent';
import CreateEvent from '../CreateEvent';
import DetailsEvent from '../DetailsEvent';
import OrganiserDashboard from '../components/OrganiserDashboard';
import SearchArtistResults from '../SearchArtistResults';
import SavedEventPage from '../components/SavedEventPage';

const OrganizerAccountDesktop = () => {
  const [showOrganiserDashboard, setShowOrganiserDashboard] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [showManageEvent, setShowManageEvent] = useState(false);
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [showDetailsEvent, setShowDetailsEvent] = useState(false);
  const [showSearchArtistResults, setShowSearchArtistResults] = useState(false);
  const [showSavedPageEvent, setShowSavedPageEvent] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setShowSettings(false);
    setShowSupport(false);
    setShowManageEvent(false);
    setShowCreateEvent(false);
    setShowDetailsEvent(false);
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
    setShowDetailsEvent(false);
    setShowOrganiserDashboard(false);
    setShowSavedPageEvent(false);
    setShowSearchArtistResults(false);
  };

  const handleSupportClick = () => {
    setShowSupport(true);
    setShowSettings(false);
    setMenuOpen(true);
    setShowManageEvent(false);
    setShowCreateEvent(false);
    setShowDetailsEvent(false);
    setShowOrganiserDashboard(false);
    setShowSavedPageEvent(false);
    setShowSearchArtistResults(false);
  };

  const handleManageEventClick = () => {
    setShowSupport(false);
    setShowSettings(false);
    setMenuOpen(true);
    setShowManageEvent(true);
    setShowCreateEvent(false);
    setShowDetailsEvent(false);
    setShowOrganiserDashboard(false);
    setShowSavedPageEvent(false);
    setShowSearchArtistResults(false);
  };

  const handleCreateEventClick = () => {
    setShowSupport(false);
    setShowSettings(false);
    setMenuOpen(true);
    setShowManageEvent(false);
    setShowCreateEvent(true);
    setShowDetailsEvent(false);
    setShowOrganiserDashboard(false);
    setShowSearchArtistResults(false);
  };

  const handleOrganiserDashboard = () => {
    setShowSavedPageEvent(false);
    setShowSupport(false);
    setShowSettings(false);
    setMenuOpen(true);
    setShowManageEvent(false);
    setShowCreateEvent(false);
    setShowOrganiserDashboard(true);
    setShowSearchArtistResults(false);
  };

  const handleSavedEventPageClick = () => {
    setShowSupport(false);
    setShowSettings(false);
    setMenuOpen(true);
    setShowManageEvent(false);
    setShowCreateEvent(false);
    setShowOrganiserDashboard(false);
    setShowSavedPageEvent(true);
    setShowSearchArtistResults(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='organiser-container'>
      <div className="organizer-container">
        <header className="organizer-header">
          <FontAwesomeIcon icon={faBars} className="burger-icon" onClick={toggleMenu} />
          <div className={`menu-dropdown ${menuOpen ? 'open' : ''}`}>
            <Link to="/organiserDashboard" onClick={handleOrganiserDashboard} className="menu-item">HOME<FontAwesomeIcon icon={faChevronRight} className='arrow' /></Link>
            <Link to="/createEvent" onClick={handleCreateEventClick} className="menu-item">CREATE EVENT <FontAwesomeIcon icon={faChevronRight} className='arrow' /></Link>
            <Link to="/manageevent" onClick={handleManageEventClick} className="menu-item">MANAGE EVENT <FontAwesomeIcon icon={faChevronRight} className='arrow' /></Link>
            <Link to="/support" onClick={handleSupportClick} className="menu-item">SUPPORT <FontAwesomeIcon icon={faChevronRight} className='arrow' /></Link>
            <Link to="/settings" onClick={handleSettingsClick} className="menu-item">SETTINGS <FontAwesomeIcon icon={faChevronRight} className='arrow' /></Link>
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
          {showOrganiserDashboard ? (
            <OrganiserDashboard isScrolled={isScrolled} menuOpen={menuOpen} />
          ) : showSettings ? (
            <Settings isScrolled={isScrolled} menuOpen={menuOpen} />
          ) : showSupport ? (
            <Support isScrolled={isScrolled} menuOpen={menuOpen} />
          ) : showManageEvent ? (
            <ManageEvent isScrolled={isScrolled} menuOpen={menuOpen} />
          ) : showCreateEvent ? (
            <CreateEvent isScrolled={isScrolled} menuOpen={menuOpen} />
          ) : showDetailsEvent ? (
            <DetailsEvent isScrolled={isScrolled} menuOpen={menuOpen} />
          ) : showSavedPageEvent ? (
            <SavedEventPage isScrolled={isScrolled} menuOpen={menuOpen} />
          ) : showSearchArtistResults ? (
            <SearchArtistResults isScrolled={isScrolled} menuOpen={menuOpen} />
          ) : (
            <Routes>
              <Route path="/organiserDashboard" element={<OrganiserDashboard isScrolled={isScrolled} menuOpen={menuOpen} />} />
              <Route path="/settings" element={<Settings isScrolled={isScrolled} menuOpen={menuOpen} />} />
              <Route path="/support" element={<Support isScrolled={isScrolled} menuOpen={menuOpen} />} />
              <Route path="/manageEvent" element={<ManageEvent isScrolled={isScrolled} menuOpen={menuOpen} />} />
              <Route path="/createEvent" element={<CreateEvent isScrolled={isScrolled} menuOpen={menuOpen} />} />
              <Route path="/eventedetails" element={<DetailsEvent menuOpen={menuOpen} />} />
              <Route path="/SavedEventPage" element={<SavedEventPage isScrolled={isScrolled} menuOpen={menuOpen} />} />
              <Route path="/searchartistresults" element={<SearchArtistResults isScrolled={isScrolled} menuOpen={menuOpen} />} />
              {/* Add more routes as needed */}
            </Routes>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default OrganizerAccountDesktop;
