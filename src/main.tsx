/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


function Links() {
  return (
    
<nav className="nav-bar">
  {/* <a 
    href="https://www.linkedin.com/in/damon-stangel-80155626b/" 
    className="text-xl font-bold" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Damon Stangel
  </a> */}
  <div className="flex space-x-6">
    <a href="/" className="nav-link">Home</a>
    <a href="/about" className="nav-link">About Me</a>
    <a href="/projects" className="nav-link">Projects</a>
  </div>
</nav>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Links />
    <App />
  </StrictMode>,
)
