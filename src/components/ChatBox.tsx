import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './ChatBox.css';

const ChatBox: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [messages, setMessages] = useState<{ user: string; assistant: string[] }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const clearInput = () => {
    setInput('');
  };

  const addMessageToChat = (userMessage: string) => {
    const newMessage = { user: userMessage, assistant: [] };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const updateAssistantResponse = (assistantResponse: string) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg, idx) =>
        idx === prevMessages.length - 1
          ? { ...msg, assistant: [assistantResponse] }
          : msg
      )
    );
    setIsTyping(false);
  };

  const fetchAssistantResponse = async (userMessage: string): Promise<string> => {
    try {
      setIsTyping(true);
      const response = await fetch('http://localhost:8080/api/queryAI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const contentType = response?.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        return data.response || 'No response from server';
      } else {
        const text = await response.text();
        return text || 'No response from server';
      }
    } catch (error) {
      console.error('Error fetching assistant response:', error);
      return 'Sorry, an error occurred while processing your request.';
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    clearInput();
    addMessageToChat(userMessage);

    const assistantResponse = await fetchAssistantResponse(userMessage);
    updateAssistantResponse(assistantResponse);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const displayMessages = (): JSX.Element[] =>
    messages.map((msg, idx) => (
      <div key={idx} className="message">
        <p>
          <strong className="you-label">You:</strong> {msg.user}
        </p>
        {msg.assistant.map((response, i) => (
          <p key={i}>
            <strong className="assistant-label">Assistant:</strong> {response}
          </p>
        ))}
      </div>
    ));

  const chatInput = (): JSX.Element => (
    <div className="chat-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );

  return (
    <div ref={ref} className={`chat-container ${inView ? 'visible' : ''}`}>
      <div className="chat-messages">
        {displayMessages()}
        {isTyping && (
          <div className="typing-message">
            <strong className="assistant-label">Assistant:</strong>
            <div className="typing-loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
      {chatInput()}
    </div>
  );
};

export default ChatBox;
