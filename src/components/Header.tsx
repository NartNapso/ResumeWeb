import React, { useEffect, useState } from 'react';
import './Header.css';
import profilePic from '../assets/pic.png'; // Add a profile picture in assets
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
    // Detect screen size for mobile
    useEffect(() => {
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Profile Picture and Name */}
        <img src={profilePic} alt="Profile" className="profile-pic" />
          {isMobile ? <></> : <h1>Nart Napso</h1>}

        {/* Menu Button for Mobile */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Navigation */}
        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
