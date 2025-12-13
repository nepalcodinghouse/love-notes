import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center py-20 px-4">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Express Your Love with Personalized Notes
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Beautiful love notes crafted to touch hearts and strengthen relationships.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <button 
              onClick={() => navigate('/generator')}
              className="px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Generate Love Note
            </button>
          </div>
        </div>
        
        {/* How to Use Section */}
        <div className="py-16 max-w-7xl w-full mt-10 bg-gray-50 rounded-xl p-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-gray-900 tracking-wide uppercase">How It Works</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Create Beautiful Love Notes in Seconds
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg text-white text-xl font-bold">
                        1
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Choose a Note Type</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Select from love letters, flirty messages, apologies, appreciations, or romantic poems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg text-white text-xl font-bold">
                        2
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Share Your Thoughts</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Tell us about your situation, your relationship, and what you want to express.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg text-white text-xl font-bold">
                        3
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Get Your Note</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Receive a beautifully crafted, personalized love note ready to send to your special someone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="py-16 max-w-7xl w-full mt-20">
          <div className="text-center">
            <h2 className="text-base font-semibold text-gray-900 tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Perfect Notes for Every Occasion
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our service creates heartfelt messages that truly express your thoughts
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg text-white">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Personalized Messages</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Each note is tailored to your relationship and specific situation for a truly personal touch.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg text-white">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Instant Creation</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Get beautiful love notes in seconds, perfect for last-minute romantic gestures.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg text-white">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Heartfelt & Genuine</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Our service understands emotions and crafts messages that feel authentic and sincere.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home