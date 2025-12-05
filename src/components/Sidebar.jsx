import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  const handleNewChat = () => {
    // Clear chat history and start fresh
    localStorage.removeItem('loveNotePrompts');
    navigate('/chat');
    window.location.reload();
  };

  return (
    <div className="flex flex-col h-full bg-white text-gray-800 w-64 fixed left-0 top-0 bottom-0 border-r border-gray-200">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
            💖
          </div>
          <h1 className="ml-3 text-xl font-bold">AI Love Notes</h1>
        </div>
        <button 
          onClick={handleNewChat}
          className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:opacity-90 transition-opacity text-sm font-medium"
        >
          + New Chat
        </button>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto p-4">
        <nav>
          <Link 
            to="/" 
            className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Link>
          <Link 
            to="/examples" 
            className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Examples
          </Link>
        </nav>

        {/* Chat History Section */}
        <div className="mt-8">
          <h2 className="text-xs uppercase text-gray-500 font-semibold mb-2">Recent Chats</h2>
          <div className="space-y-1">
            <div className="p-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer text-sm truncate">
              Anniversary message ideas
            </div>
            <div className="p-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer text-sm truncate">
              Apology for misunderstanding
            </div>
            <div className="p-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer text-sm truncate">
              Romantic poem for wedding
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 text-sm">
            U
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">User</p>
            <p className="text-xs text-gray-500">Free Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;