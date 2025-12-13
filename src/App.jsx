import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Generator from './pages/Generator'
import Navbar from './components/Navbar'
import PageNotFound from './pages/PageNotFound'

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App