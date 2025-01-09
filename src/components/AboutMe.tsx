import React from 'react';
import { useInView } from 'react-intersection-observer';
import './AboutMe.css';
import HeroTitle from './HeroTitle';
import HeroTagline from './HeroTagline';
import HeroDescription from './HeroDescription';
import HeroCTA from './HeroCTA';
import profileGif from '../assets/IMG_5167.gif';

const AboutMe: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className={`about-me hero-section ${inView ? 'visible' : ''}`}
    >
      <div className="about-me-content">
        {/* Left Content: Text */}
        <div className="about-me-text">
          <HeroTitle title="Hi, I'm Nart Napso" />
          <HeroTagline tagline="Full Stack Developer | Hybrid Athlete" />
          <HeroDescription
            description={[
              "I'm a passionate Software Engineer with extensive experience in full-stack development.",
              "My expertise lies in delivering scalable and modular software solutions, with a focus on intuitive UI design, robust system architecture, and seamless integration of complex platforms.",
              "I pride myself on leveraging design patterns to build maintainable, efficient, and high-quality software.",
              "Beyond engineering, I’m a hybrid athlete and coach, blending CrossFit, running, weightlifting, and calisthenics. As the first Israeli to complete a 24-hour ultramarathon with 300 obstacles, I thrive on challenging limits—both in technology and fitness.",
              "Let’s connect and create something impactful together!",
            ]}
          />
          <HeroCTA />
        </div>

        {/* Right Content: GIF */}
        <div className="about-me-gif">
          <img src={profileGif} alt="Nart Napso GIF" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
