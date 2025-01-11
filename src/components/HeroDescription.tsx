import React from 'react';

interface HeroDescriptionProps {
  description: string[];
}

const HeroDescription: React.FC<HeroDescriptionProps> = ({ description }) => {
  return (
    <div className="descriptions-container">
      {description.map((line, index) => (
        <p key={index} className="hero-description">
          {line}
        </p>
      ))}
    </div>
  );
};

export default HeroDescription;
