/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import './App.css'

const images = [
  "src/assets/icon.jpg",
  "src/assets/oldIcon.png",
  "src/assets/bsuFlowers.jpg", 
  "src/assets/famPic.png"
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Changes image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    {/* INTRO SECTION */}
<section id="intro" className="section">
  <h1 className='introHeader'>Intro</h1>
  <div className="introContainer">
    <div className='introSection'>
      <p>
        Hello, my name is Damon Stangel. I'm currently an Application Developer for <a href='https://www.prowestgis.com/' target="_blank"> Pro-West & Associates Inc</a>. 
        I consider myself a skilled front-end developer and application developer, who is passionate about building interactive web experiences.
      </p>
      &nbsp;
      &nbsp;
      <p className="skillsSection">
        My skills include: 
        <div className="listSkills">
        <ul>
          <li>TypeScript</li>
          <li>Python</li>
          <li>Angular</li>
          <li>mySQL</li>
        </ul>
        <ul>
          <li>Esri Javascript 4x API</li>
          <li>.NET</li>
          <li>React</li>
          <li>C#</li>
        </ul>
        <ul>
          <li>Javascript</li>
          <li>OpenSearch API</li>
          <li>Vite</li>
          <li>AWS</li>
        </ul>
        </div>
      </p>
    </div>
    <div className="slideshow-wrapper">
      <img
        src={images[currentIndex]}
        className="active-slide"
        alt="Slideshow"
      />
    </div>
  </div>
</section>

{/* ABOUT ME SECTION */}

      <section id="about" className="section">
        <h1 className='aboutHeader'>About Me</h1>
      </section>
      

{/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <h1 className='projectsHeader'>Projects</h1>
      </section>
    </>
  )
}

export default App
