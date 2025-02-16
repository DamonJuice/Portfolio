import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

function Links() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMenuOpen(false); // Close menu on desktop
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        {!isMobile && (
          <div className="nav-links">
            <a href="#intro" className="nav-link">Intro</a>
            <a href="#about" className="nav-link">About Me</a>
            <a href="#projects" className="nav-link">Projects</a>
          </div>
        )}

        <a className="nameTIME">Damon Stangel</a>

        {isMobile && (
          <button className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        )}

        {isMobile && isMenuOpen && (
          <div className="dropdown">
            <a href="#intro" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>Intro</a>
            <a href="#about" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>About Me</a>
            <a href="#projects" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
          </div>
        )}
      </div>
    </nav>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Links />
    <App />
  </StrictMode>
);
