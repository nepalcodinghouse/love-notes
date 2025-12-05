import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

// Import custom prompts data
import customPromptsData from '../data/customPrompts.json';

function Chat() {
  const location = useLocation();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [userName, setUserName] = useState('');
  const [userPreferences, setUserPreferences] = useState({
    tone: '',
    style: '',
    recipient: ''
  });
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Load saved prompts from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('loveNotePrompts');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
    
    // Load user name from localStorage
    const savedUserName = localStorage.getItem('userFullName');
    if (savedUserName) {
      setUserName(savedUserName);
    }
    
    // Load user preferences from localStorage
    const savedPreferences = localStorage.getItem('userPreferences');
    if (savedPreferences) {
      setUserPreferences(JSON.parse(savedPreferences));
    }
    
    // Check if there's an initial prompt from navigation
    if (location.state && location.state.initialPrompt) {
      setInputValue(location.state.initialPrompt);
      // Automatically generate response for the initial prompt
      setTimeout(() => {
        handleSendWithPrompt(location.state.initialPrompt);
      }, 500);
    }
  }, [location.state]);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('loveNotePrompts', JSON.stringify(messages));
    }
  }, [messages]);

  // Save user name to localStorage whenever it changes
  useEffect(() => {
    if (userName) {
      localStorage.setItem('userFullName', userName);
    }
  }, [userName]);

  // Save user preferences to localStorage
  useEffect(() => {
    if (userPreferences.tone || userPreferences.style || userPreferences.recipient) {
      localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
    }
  }, [userPreferences]);

  const handleSend = () => {
    if (inputValue.trim() === '') return;

    // Check if the user is providing their name
    const namePattern = /my\s+name\s+is\s+([^.!?]+)/i;
    const nameMatch = inputValue.match(namePattern);
    
    if (nameMatch) {
      const newName = nameMatch[1].trim();
      setUserName(newName);
    }

    // Check for user preferences in the input
    const preferencePatterns = {
      tone: /(?:tone|sound)\s+(?:should\s+be\s+|is\s+|like\s+)(\w+)/i,
      style: /(?:style|type)\s+(?:should\s+be\s+|is\s+|like\s+)(\w+)/i,
      recipient: /(?:to\s+my\s+|recipient\s+is\s+|for\s+my\s+)(\w+)/i
    };

    const updatedPreferences = {...userPreferences};
    let hasPreferenceUpdates = false;

    Object.keys(preferencePatterns).forEach(key => {
      const match = inputValue.match(preferencePatterns[key]);
      if (match) {
        updatedPreferences[key] = match[1].trim();
        hasPreferenceUpdates = true;
      }
    });

    if (hasPreferenceUpdates) {
      setUserPreferences(updatedPreferences);
    }

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    const promptToSend = inputValue;
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        text: generateLoveNoteResponse(promptToSend),
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleSendWithPrompt = (prompt) => {
    if (prompt.trim() === '') return;

    // Check if the user is providing their name
    const namePattern = /my\s+name\s+is\s+([^.!?]+)/i;
    const nameMatch = prompt.match(namePattern);
    
    if (nameMatch) {
      const newName = nameMatch[1].trim();
      setUserName(newName);
    }

    // Check for user preferences in the prompt
    const preferencePatterns = {
      tone: /(?:tone|sound)\s+(?:should\s+be\s+|is\s+|like\s+)(\w+)/i,
      style: /(?:style|type)\s+(?:should\s+be\s+|is\s+|like\s+)(\w+)/i,
      recipient: /(?:to\s+my\s+|recipient\s+is\s+|for\s+my\s+)(\w+)/i
    };

    const updatedPreferences = {...userPreferences};
    let hasPreferenceUpdates = false;

    Object.keys(preferencePatterns).forEach(key => {
      const match = prompt.match(preferencePatterns[key]);
      if (match) {
        updatedPreferences[key] = match[1].trim();
        hasPreferenceUpdates = true;
      }
    });

    if (hasPreferenceUpdates) {
      setUserPreferences(updatedPreferences);
    }

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: prompt,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        text: generateLoveNoteResponse(prompt),
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const generateLoveNoteResponse = (prompt) => {
    // This is a simplified response generator
    // In a real app, this would connect to an AI service
    
    // Check if we should personalize the response with the user's name
    let personalizedPrompt = prompt;
    if (userName) {
      personalizedPrompt = `${prompt}\n\nUser's name: ${userName}`;
    }
    
    // Add user preferences to context
    let contextualPrompt = personalizedPrompt;
    if (userPreferences.tone || userPreferences.style || userPreferences.recipient) {
      contextualPrompt += `\n\nPreferences:`;
      if (userPreferences.tone) contextualPrompt += ` Tone: ${userPreferences.tone}`;
      if (userPreferences.style) contextualPrompt += ` Style: ${userPreferences.style}`;
      if (userPreferences.recipient) contextualPrompt += ` Recipient: ${userPreferences.recipient}`;
    }
    
    const responses = [
      `I understand you're looking for help with: "${prompt}". Here's a personalized love note based on your request:

My Dearest${userPreferences.recipient ? ` ${userPreferences.recipient}` : ''},

${prompt}

Your words have touched my heart deeply. I wanted to respond with all the love I feel for you.

${userName ? `With all my love,\n${userName}` : 'Forever yours,\n[Your Name]'}`,
      `Thank you for sharing your thoughts: "${prompt}". Here's a heartfelt response:

Beloved${userPreferences.recipient ? ` ${userPreferences.recipient}` : ''},

${prompt}

Your message reminded me of all the reasons I fell in love with you.

${userName ? `With all my affection,\n${userName}` : 'With all my affection,\n[Your Name]'}`,
      `I received your message: "${prompt}". Here's a tender reply:

My Love${userPreferences.recipient ? ` ${userPreferences.recipient}` : ''},

${prompt}

Your words mean the world to me. I cherish every moment we share.

${userName ? `Devotedly,\n${userName}` : 'Devotedly,\n[Your Name]'}`
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      {isSidebarOpen && <Sidebar />}
      
      {/* Main Content */}
      <div className={`flex-1 flex flex-col ${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300`}>
        {/* Chat Container */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full flex flex-col">
            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500">
                  {/* Sidebar toggle button moved here */}
                  <div className="absolute top-4 left-4 z-10">
                    <button 
                      onClick={toggleSidebar}
                      className="p-2 rounded-md hover:bg-gray-100"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl mb-4">
                    💖
                  </div>
                  <h2 className="text-2xl font-bold text-gray-700 mb-2">AI Love Notes Assistant</h2>
                  <p className="text-center max-w-md mb-6">
                    Share your feelings and I'll help you create beautiful, personalized love notes.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
                    {customPromptsData.slice(0, 4).map((prompt) => (
                      <div 
                        key={prompt.id}
                        className="bg-gray-50 p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors shadow-sm"
                        onClick={() => {
                          setInputValue(prompt.prompt);
                        }}
                      >
                        <h3 className="font-medium text-gray-900">{prompt.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{prompt.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Sidebar toggle button for when there are messages */}
                  <div className="absolute top-4 left-4 z-10">
                    <button 
                      onClick={toggleSidebar}
                      className="p-2 rounded-md hover:bg-gray-100"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                  
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.sender === 'ai' && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm mr-3 flex-shrink-0">
                          💖
                        </div>
                      )}
                      <div 
                        className={`max-w-[85%] md:max-w-[70%] rounded-2xl px-4 py-3 ${
                          message.sender === 'user' 
                            ? 'bg-blue-500 text-white rounded-br-none' 
                            : 'bg-gray-50 text-gray-800 rounded-bl-none shadow-sm border border-gray-200'
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{message.text}</div>
                        <div className="text-xs mt-2 opacity-70">{message.timestamp}</div>
                      </div>
                      {message.sender === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 text-sm ml-3 flex-shrink-0">
                          U
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm mr-3 flex-shrink-0">
                        💖
                      </div>
                      <div className="bg-gray-50 text-gray-800 rounded-2xl rounded-bl-none shadow-sm border border-gray-200 px-4 py-3">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mr-1 animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full mr-1 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>
            
            {/* Input Area */}
            <div className="border-t border-gray-200 bg-white p-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col">
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Describe your feelings or what you'd like to express..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 resize-none mb-3"
                    rows={3}
                  />
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => setMessages([])}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                    >
                      Clear Chat
                    </button>
                    <div className="flex items-center">
                      <span className="text-xs text-gray-500 mr-3">Press Enter to send</span>
                      <button
                        onClick={handleSend}
                        disabled={inputValue.trim() === '' || isLoading}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;