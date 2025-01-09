import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>Feel free to reach out through any of the following channels:</p>
      <div className="contact-details">
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <p>052-8044482</p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p><a href="mailto:nartnpso@gmail.com">nartnpso@gmail.com</a></p>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <p>
            <a href="https://www.linkedin.com/in/nart-napso-8a7184105" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
