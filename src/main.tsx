/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


function Links() {
  return (
    <nav className="nav-bar">
      <div className="flex space-x-6">
        <a href="#intro" className="nav-link">Intro</a>
        <a href="#about" className="nav-link">About Me</a>
        <a href="#projects" className="nav-link">Projects</a>
      </div>

      {/* Move myLinks outside the flex container */}
      <div className='myLinks'>
        <a className='igLogo' href="https://www.instagram.com/damonjuice/"> <img src="src/assets/IG LOGO.png" alt="InstaLogo" /> </a>
        <a className='linkedLogo' href="https://www.linkedin.com/in/damon-stangel-80155626b/"> <img src="src/assets/linkedIn logo.png" alt="LinkedIn Logo"></img> </a>
        <a className='gitLogo' href="https://github.com/DamonJuice"> <img src="src/assets/git logo.png" alt="GitHub logo"></img> </a>
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


