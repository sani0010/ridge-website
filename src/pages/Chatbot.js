import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hello! How can I help you today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: inputMessage }]);

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });
      
      const data = await response.json();
      setMessages(prev => [...prev, { type: 'bot', content: data.response }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [
        ...prev,
        { 
          type: 'bot', 
          content: 'Sorry, I encountered an error. Please try again later.' 
        }
      ]);
    }
    
    setInputMessage('');
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && !isMinimized && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-[#F26722] text-white p-4 rounded-full shadow-lg hover:bg-[#e0561b] transition-all duration-300 z-50"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      <div
        className={`fixed right-4 bottom-4 w-80 sm:w-96 h-[500px] bg-white rounded-lg shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'
        }`}
      >
        {/* Header */}
        <div className="bg-[#F26722] text-white p-4 rounded-t-lg flex justify-between items-center">
          <h3 className="font-semibold">Ridge College Assistant</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-[#e0561b] p-1 rounded"
          >
            <X size={18} />
          </button>
        </div>

        {!isMinimized && (
          <>
            {/* Messages Container */}
            <div className="h-[380px] overflow-y-auto p-4 bg-gray-50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-[#F26722] text-white'
                        : 'bg-white shadow text-gray-800'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-[#F26722]"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-[#F26722] text-white p-2 rounded-lg hover:bg-[#e0561b] transition-all duration-300"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Chatbot;
