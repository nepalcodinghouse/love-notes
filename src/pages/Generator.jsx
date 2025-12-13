import React, { useState } from 'react';

function Generator() {
  const [prompt, setPrompt] = useState('');
  const [generatedNote, setGeneratedNote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError('');
    setGeneratedNote('');

    try {
      // Attempt to call the Creaitor AI API
      const response = await fetch('https://app.creaitor.ai/api/v1/ai-assistants/writer/love-letter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      
      // Extract the generated content from the API response
      // This will depend on the actual structure of the API response
      const generatedContent = data.content || data.response || data.generated_text || JSON.stringify(data);
      
      setGeneratedNote(generatedContent);
      setIsLoading(false);
    } catch (err) {
      console.error('API Error:', err);
      
      // If we get a CORS error or any network error, show a more helpful message
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        setError('Direct API access is not available from the browser due to security restrictions. In a production environment, this would be handled by a backend service.');
      } else {
        setError(`API Error: ${err.message}`);
      }
      
      // Use mock response as fallback
      const mockResponse = `My Dearest,

${prompt}

Your words have touched my heart deeply. I wanted to respond with all the love I feel for you.

Forever yours,
[Your Name]`;

      // Set the mock response after a short delay to simulate API call
      setTimeout(() => {
        setGeneratedNote(mockResponse);
        setIsLoading(false);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Love Letter Generator
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Create beautiful, personalized love letters in seconds
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="prompt" className="block text-lg font-medium text-gray-800 mb-3">
                  Describe your feelings:
                </label>
                <textarea
                  id="prompt"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-gray-800 resize-none"
                  placeholder="Tell me about your relationship, how you're feeling, and what you want to express..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  disabled={isLoading}
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isLoading || !prompt.trim()}
                  className="px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Generating...' : 'Generate Love Letter'}
                </button>
              </div>
            </form>

            {error && (
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-700">{error}</p>
                <p className="text-yellow-700 mt-2 text-sm">
                  Note: This demo shows how the integration would work. In a production environment, API calls would be handled securely through a backend service.
                </p>
              </div>
            )}

            {isLoading && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-center">
                  <div className="w-3 h-3 bg-gray-500 rounded-full mr-2 animate-bounce"></div>
                  <div className="w-3 h-3 bg-gray-500 rounded-full mr-2 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  <span className="ml-3 text-gray-600">Crafting your love letter...</span>
                </div>
              </div>
            )}

            {generatedNote && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Generated Love Letter</h2>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="whitespace-pre-wrap text-gray-700 font-sans">
                    {generatedNote}
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(generatedNote);
                      alert('Copied to clipboard!');
                    }}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Copy to Clipboard
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 mb-2">1</div>
              <h3 className="font-medium text-gray-900">Describe Your Feelings</h3>
              <p className="text-gray-600 text-sm mt-1">Tell us about your relationship and what you want to express</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 mb-2">2</div>
              <h3 className="font-medium text-gray-900">AI Generation</h3>
              <p className="text-gray-600 text-sm mt-1">Our AI crafts a personalized love letter based on your input</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 mb-2">3</div>
              <h3 className="font-medium text-gray-900">Share & Send</h3>
              <p className="text-gray-600 text-sm mt-1">Copy your letter and send it to your special someone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generator;