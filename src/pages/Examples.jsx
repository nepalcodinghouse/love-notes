import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loveLettersData from '../data/loveLetters.json';
import flirtsData from '../data/flirts.json';
import apologiesData from '../data/apologies.json';
import appreciationsData from '../data/appreciations.json';
import romanticPoemsData from '../data/romanticPoems.json';

function Examples() {
  const [prompt, setPrompt] = useState('generate a love letter with name aaiska');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const allExamples = [
    { category: 'Love Letters', data: loveLettersData },
    { category: 'Flirty Notes', data: flirtsData },
    { category: 'Apologies', data: apologiesData },
    { category: 'Appreciation Notes', data: appreciationsData },
    { category: 'Romantic Poems', data: romanticPoemsData }
  ];

  const handleGetResponse = () => {
    if (prompt.trim() === '') return;
    
    setIsLoading(true);
    setResponse('');
    
    // Simulate AI response
    setTimeout(() => {
      // Extract name from prompt if provided
      let name = 'aaiska';
      const nameMatch = prompt.match(/name\s+(\w+)/i);
      if (nameMatch && nameMatch[1]) {
        name = nameMatch[1];
      }
      
      const responses = [
        `My Dearest ${name},

Every moment with you feels like a dream I never want to wake up from. Your smile lights up my world, and your touch sends shivers down my spine.

Forever yours,
[Your Name]`,
        `To my lovely ${name},

I wanted to take a moment to tell you how grateful I am to have you in my life. Your kindness and love inspire me every day.

With all my heart,
[Your Name]`,
        `Dear ${name},

Words seem inadequate to express the depth of my feelings for you. Each day with you brings new joys and deeper appreciation.

Devotedly yours,
[Your Name]`
      ];
      
      setResponse(responses[Math.floor(Math.random() * responses.length)]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Love Note Examples
        </h1>
        <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Browse through our collection of beautifully crafted love notes for inspiration
        </p>
        
        {/* Chat Prompt Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Chat with AI</h2>
          <p className="text-gray-600 mb-4">Ask the AI to help you create or respond to love notes</p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
            />
            <button
              onClick={handleGetResponse}
              disabled={isLoading}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Get Response
            </button>
          </div>
          
          {response && (
            <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-700 font-sans">
                {response}
              </pre>
            </div>
          )}
          
          {isLoading && (
            <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-bounce"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                <span className="ml-3 text-gray-600">AI is crafting a response...</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="space-y-16">
          {allExamples.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.data.map((example) => (
                  <div key={example.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg text-gray-900 mb-3">{example.title}</h3>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
                      <div className="whitespace-pre-wrap text-gray-700 font-sans text-sm">
                        {example.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={() => navigate('/')}
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 mr-4"
          >
            Create Your Own Love Note
          </button>
          <button 
            onClick={() => navigate('/chat')}
            className="inline-block px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300"
          >
            Full Chat Experience
          </button>
        </div>
      </div>
    </div>
  );
}

export default Examples;