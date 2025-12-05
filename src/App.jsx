import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'
import Examples from './pages/Examples'
import Navbar from './components/Navbar'

import './App.css'

// Component to conditionally render Navbar
function ConditionalNavbar() {
  const location = useLocation()
  
  // Hide navbar on chat page
  if (location.pathname === '/chat') {
    return null
  }
  
  return <Navbar />
}

function App() {
  return (
    <>
      <Router>
        <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/examples" element={<Examples />} />
        </Routes>
      </Router>
    </>
  )
}

export default App