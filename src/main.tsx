import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

function Links() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMenuOpen(false); // Close menu on desktop
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className='rootDiv'> </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Links />
    <App />
  </StrictMode>
);
