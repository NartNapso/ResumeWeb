import React from 'react';

interface HeroDescriptionProps {
  description: string[];
}

const HeroDescription: React.FC<HeroDescriptionProps> = ({ description }) => {
  return (
    <>
      {description.map((line, index) => (
        <p key={index} className="hero-description">
          {line}
        </p>
      ))}
    </>
  );
};

export default HeroDescription;
