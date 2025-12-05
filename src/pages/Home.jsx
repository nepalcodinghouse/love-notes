import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [selectedType, setSelectedType] = useState('')
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()

  const types = ['love letter', 'flirt', 'apology', 'appreciation', 'romantic poem']

  const handleTypeSelect = (type) => {
    setSelectedType(type)
    setInputValue(`@type:${type}\n`)
  }

  const handleInputChange = (e) => {
    // Prevent removing the type prefix
    if (selectedType && e.target.value.startsWith(`@type:${selectedType}\n`)) {
      setInputValue(e.target.value)
    } else if (!selectedType) {
      setInputValue(e.target.value)
    }
  }

  const handleGenerate = () => {
    if (selectedType && inputValue.trim() !== '') {
      // Navigate to chat page with the input value
      navigate('/chat', { state: { initialPrompt: inputValue } })
    }
  }

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center py-20 px-4">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Express Your Love with AI-Generated Notes
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Personalized love notes crafted by artificial intelligence to touch hearts and strengthen relationships.
          </p>
          
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-lg mx-auto">
            {/* Textarea Input */}
            <div className="mb-6">
              <label htmlFor="love-input" className="block text-lg font-medium text-gray-800 mb-3">
                Describe your feelings:
              </label>
              <textarea
                id="love-input"
                rows={4}
                className="w-full px-4 py-3 border border-blue-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 resize-none"
                placeholder={selectedType ? "" : "Select a note type below and then describe your feelings..."}
                value={inputValue}
                onChange={handleInputChange}
              ></textarea>
            </div>
            
            {/* Type Selection */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-800 mb-3">
                &lt; &gt; Select Note Type: &lt; &gt;
              </label>
              <div className="flex flex-wrap gap-2 justify-center">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => handleTypeSelect(type)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                      selectedType === type
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
              
              {/* Display current type prefix */}
              {selectedType && (
                <div className="mt-3 text-sm text-gray-600">
                  Current prefix: <span className="font-mono bg-gray-100 px-2 py-1 rounded">@type:{selectedType}</span>
                </div>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={handleGenerate}
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                disabled={!selectedType || inputValue.trim() === ''}
              >
                Generate Love Note
              </button>
              <button 
                onClick={() => navigate('/examples')}
                className="px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                See Examples
              </button>
            </div>
          </div>
          
          {/* Example Prompts */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Inspiration?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div 
                className="bg-gray-50 p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => {
                  handleTypeSelect('love letter');
                  setInputValue('@type:love letter\nTell my partner how much they mean to me on our anniversary');
                }}
              >
                <h3 className="font-medium text-gray-900">Anniversary Message</h3>
                <p className="text-gray-600 text-sm mt-1">Express love and appreciation for your special day</p>
              </div>
              <div 
                className="bg-gray-50 p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => {
                  handleTypeSelect('flirt');
                  setInputValue('@type:flirt\nFlirt with my crush in a playful way');
                }}
              >
                <h3 className="font-medium text-gray-900">Playful Flirt</h3>
                <p className="text-gray-600 text-sm mt-1">Light-hearted teasing to spark interest</p>
              </div>
              <div 
                className="bg-gray-50 p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => {
                  handleTypeSelect('apology');
                  setInputValue('@type:apology\nApologize sincerely after a misunderstanding');
                }}
              >
                <h3 className="font-medium text-gray-900">Heartfelt Apology</h3>
                <p className="text-gray-600 text-sm mt-1">Make amends after a disagreement</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* How to Use Section */}
        <div className="py-16 max-w-7xl w-full mt-10 bg-gray-50 rounded-xl p-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">How It Works</h2>
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
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg text-white text-xl font-bold">
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
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg text-white text-xl font-bold">
                        2
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Describe Your Feelings</h3>
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
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Perfect Notes for Every Occasion
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our AI creates heartfelt messages that truly express your feelings
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg text-white">
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
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg text-white">
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
                      Our AI understands emotions and crafts messages that feel authentic and sincere.
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