import React from 'react';
import cvFile from '../assets/NartNapso_CV.pdf';

const HeroCTA: React.FC = () => {
  return (
    <div className="cta-buttons">
      <a href="contact" className="btn btn-primary">
        Contact Me
      </a>
      <a href={cvFile} target="_blank" download="NartNapso_CV.pdf" className="btn btn-secondary">
        Download Resume
      </a>
    </div>
  );
};

export default HeroCTA;
