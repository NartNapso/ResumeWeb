import React from 'react';
import AboutMe from '../components/AboutMe';
import './Home.css';
import PopupChat from '../components/PopupChat';
import TimelineAndStats from '../components/TimelineAndStats';

const Home: React.FC = () => {
  return (
    <div className="home">
      <main>
        <AboutMe />
        <TimelineAndStats />
        <PopupChat />
      </main>
    </div>
  );
};

export default Home;