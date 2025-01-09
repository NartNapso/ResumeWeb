import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact'; // Import Contact page
import Footer from './components/Footer';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <>
        <Header /> {/* Keep the Header static */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> {/* Keep the Footer static */}
      </>
    </Router>
  );
};

export default App;
