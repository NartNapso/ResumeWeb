import React from 'react';
import './Header.css';
import profilePic from '../assets/pic.png'; // Add a profile picture in assets
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div>
          <h1>Nart Napso</h1>
        </div>
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
