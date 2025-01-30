import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'
import Alllandingpages from './pages/Alllandingpages'
import PreviewPage from './pages/PreviewPage'

const App = () => {
  return (
    <div className='w-full bg-[#212121]  min-h-screen '>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preview/:id" element={<PreviewPage />} />
      </Routes>
    </Router>

    </div>
  )
}

export default App
