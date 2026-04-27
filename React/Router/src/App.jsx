import React from 'react'
import { Routes, Route, Link } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
        <Link to='/' element={<Home />}>Home</Link>
        <Link to='/about' element={<About />}>About</Link>
        <Link to='/contact' element={<Contact />}>Contact</Link>
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App