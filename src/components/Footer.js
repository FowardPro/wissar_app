import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
  
        if (scrollTop + windowHeight >= documentHeight) {
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
    <footer className={`footer ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <p>&copy; 2024 Wissar. All rights reserved.</p>
        <p><a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a></p>
      </div>
    </footer>
  );
};

export default Footer;
