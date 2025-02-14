/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


function NavBar() {
  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-4 shadow-lg flex justify-between px-6">
      <a href="/" className="text-xl font-bold">Damon Stangel</a>
      <ul className="flex space-x-10 text-lg font-semibold">
        <li><a href="/" className="hover:text-gray-400 transition">Home</a></li>
        <li><a href="/about" className="hover:text-gray-400 transition">About Me</a></li>
        <li><a href="/projects" className="hover:text-gray-400 transition">Projects</a></li>
      </ul>
    </nav>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <App />
  </StrictMode>,
)
