import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <nav>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', padding: 0, margin: 0 }}>
          <li><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
          <li><Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link></li>
          <li><Link to="/services" style={{ textDecoration: 'none', color: 'black' }}>Services</Link></li>
          <li><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;