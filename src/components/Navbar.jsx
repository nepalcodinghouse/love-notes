import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 rounded-full bg-blue-600 mr-3"></div>
              <Link to="/" className="text-xl font-bold text-gray-800">
                AI Love Notes
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link to="/chat" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Chat</Link>
            <Link to="/examples" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Examples</Link>
            <a href="#generate" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Generate</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</a>
          </div>
          <div className="flex items-center">
            <button className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar