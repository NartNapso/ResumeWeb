import React, { useState } from 'react';
import ChatBox from './ChatBox';
import './PopupChat.css';

const PopupChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup-chat">
      {/* Button to open the chat */}
      <button className="open-chat-button" onClick={togglePopup}>
        💬 Chat with Me
      </button>

      {/* Modal for ChatBox */}
      {isOpen && (
        <div className="modal-overlay" onClick={togglePopup}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
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
