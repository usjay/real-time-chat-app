// src/ChatApp.js
import React, { useState } from 'react';

function ChatApp() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
      <h2>Chat Application</h2>
      <div style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', height: '200px', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ padding: '5px', marginBottom: '5px', backgroundColor: '#e0e0e0' }}>
            {msg}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ padding: '10px', width: '80%' }}
      />
      <button onClick={handleSendMessage} style={{ padding: '10px', width: '15%' }}>
        Send
      </button>
    </div>
  );
}

export default ChatApp;
