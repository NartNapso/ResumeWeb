import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Nart Napso. All Rights Reserved.</p>
      <div className="social-links">
        <a href="https://github.com/NartNapso?tab=repositories" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/nart-napso-8a7184105" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:nartnpso@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
