import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

function Links() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="nav-links">
          <a href="#intro" className="nav-link">Intro</a>
          <a href="#about" className="nav-link">About Me</a>
          <a href="#projects" className="nav-link">Projects</a>
        </div>

        <a className='nameTIME'>Damon Stangel</a>

        {/* Hamburger menu (three lines) */}
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Dropdown menu */}
        {isMenuOpen && (
          <div className="dropdown">
            <a href="#intro" className="dropdown-link">Intro</a>
            <a href="#about" className="dropdown-link">About Me</a>
            <a href="#projects" className="dropdown-link">Projects</a>
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
)
