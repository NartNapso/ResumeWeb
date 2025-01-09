import React from 'react';

interface HeroImageProps {
  imagePath: string;
  altText: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ imagePath, altText }) => {
  return (
    <div className="hero-image">
      <img src={imagePath} alt={altText} loading="lazy" />
    </div>
  );
};

export default HeroImage;
