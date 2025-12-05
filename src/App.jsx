import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

import './App.css'

// Component to conditionally render Navbar
function ConditionalNavbar() {
  const location = useLocation()
  
  // Only show navbar if not on home page
  if (location.pathname === '/') {
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
        </Routes>
      </Router>
    </>
  )
}

export default App