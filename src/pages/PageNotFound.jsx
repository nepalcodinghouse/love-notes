import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl font-bold text-gray-900 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound