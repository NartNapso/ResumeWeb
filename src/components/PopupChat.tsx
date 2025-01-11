import React, { useState, useEffect } from 'react';
import ChatBox from './ChatBox';
import './PopupChat.css';

const PopupChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // Detect screen size for mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="popup-chat">
      {/* Button to open the chat */}
      <button className="open-chat-button" onClick={togglePopup}>
        💬 Chat with Me
      </button>

      {/* Modal for ChatBox */}
      {isOpen && (
        <div
          className={`modal-overlay ${isMobile ? 'mobile-overlay' : ''}`}
          onClick={togglePopup}
        >
          <div
            className={`modal-container ${isMobile ? 'mobile-container' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Want to know more about me? You can ask my assistant!</h3>
              <button className="close-chat-button" onClick={togglePopup}>
                ✖
              </button>
            </div>
            <ChatBox />
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupChat;
