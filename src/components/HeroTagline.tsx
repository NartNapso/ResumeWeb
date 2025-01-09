import React from 'react';

interface HeroTaglineProps {
  tagline: string;
}

const HeroTagline: React.FC<HeroTaglineProps> = ({ tagline }) => {
  return <h2 className="hero-tagline">{tagline}</h2>;
};

export default HeroTagline;
