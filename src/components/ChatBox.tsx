import React from 'react';
import { useInView } from 'react-intersection-observer';
import './ChatBox.css';

const ChatBox: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Activate when 10% of the component is visible
  });

  const [messages, setMessages] = React.useState<{ user: string; assistant: string[] }[]>([]);
  const [input, setInput] = React.useState('');

  // Clears the input field
  const clearInput = () => {
    setInput('');
  };

  // Adds a new user message to the chat state
  const addMessageToChat = (userMessage: string) => {
    const newMessage = { user: userMessage, assistant: [] };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  // Updates the assistant's response for the latest message
  const updateAssistantResponse = (assistantResponse: string) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg, idx) =>
        idx === prevMessages.length - 1
          ? { ...msg, assistant: [assistantResponse] }
          : msg
      )
    );
  };

  // Fetches the assistant's response from the server
  const fetchAssistantResponse = async (userMessage: string): Promise<string> => {
    try {
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

  // Handles the sending process
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    clearInput(); // Clear input immediately
    addMessageToChat(userMessage); // Add the user's message to the chat

    const assistantResponse = await fetchAssistantResponse(userMessage); // Fetch response from the assistant
    updateAssistantResponse(assistantResponse); // Update the assistant's response in the chat
  };

  // Handles pressing Enter to send a message
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  // Renders the chat messages
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

  // Renders the input box and send button
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
      
      <div className="chat-messages">{displayMessages()}</div>
      {chatInput()}
    </div>
  );
};

export default ChatBox;
