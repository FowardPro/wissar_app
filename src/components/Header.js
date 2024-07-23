import React, { useEffect, useState } from 'react';
import './Header.css';
import LogoSVG from '../assets/photos/svg/header_logo.svg'; // Ensure this path is correct
import StickyLogoSVG from '../assets/photos/svg/header_logo1.svg'; // Sticky logo

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   <div className='header_bottom_line'>
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        {/* SVG Logo with margin-left */}
        <div className="logo">
          <img 
             src={isSticky ? StickyLogoSVG : LogoSVG}
             alt="Wissar Logo"
             className="logo-svg" 
          />
        </div>
        {/* Navigation moved to the right-hand side */}
        <nav className="navigation">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#artists">Artists</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
    </div>  
  );
};

export default Header;
