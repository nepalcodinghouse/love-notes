import React from 'react'
import { FaHeart, FaClock } from 'react-icons/fa'

function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <div className="flex justify-center mb-6">
          <FaHeart className="text-pink-500 text-6xl animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          We're working on something special for you!
        </p>
        <div className="flex justify-center items-center text-gray-500">
          <FaClock className="mr-2" />
          <span>Launching soon...</span>
        </div>
      </div>
    </div>
  )
}

export default Home