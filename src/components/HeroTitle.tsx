import React from 'react';

interface HeroTitleProps {
  title: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ title }) => {
  return <h1 className="hero-title">{title}</h1>;
};

export default HeroTitle;
