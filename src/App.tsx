import { useState, useEffect } from "react";
import './App.css'

const images = [
  "src/assets/icon.jpg",
  "src/assets/oldIcon.png",
  "src/assets/bsuFlowers.jpg", 
  "src/assets/famPic.png"
];

const projectLinks = [
  { url: "https://github.com/yourusername/project1", image: "src/assets/famPic.png" },
  { url: "https://github.com/yourusername/project2", image: "path/to/your/image2.jpg" },
  { url: "https://github.com/yourusername/project3", image: "path/to/your/image3.jpg" },
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
            <p>Download my resume!</p>
            <a href="public/resume.pdf" download="Damon Stangel Resume.pdf">
            <button>Download PDF</button></a>
            &nbsp;
            <p className="skillsSection">
              My skills include: 
              <div className="listSkills">
                <ul>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>Angular</li>
                  <li>mySQL</li>
                  <li>Node.js</li>
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

      <section id="about" className="section">
      <h1 className='aboutHeader'>About Me</h1>
      <div className="aboutContainer">
        <div className='aboutSection'>
          <p>
            I'm Damon Stangel, a passionate Application Developer with a strong background in front-end development. 
            With experience in technologies like TypeSCript, React, Node.js, and Python, I strive to build seamless and efficient web applications.
          </p>
          <p>
            I enjoy solving complex problems and working on innovative projects that push the boundaries of modern web development.
          </p>
        </div>
      </div>
    </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section" style={{ backgroundImage: `url('public/assets/animatedRetroGameBG.gif')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className='projectsHeader'>Projects</h1>
        <div className="projectsContainer">
          <div className="projectsGrid">
            {projectLinks.map((project, index) => (
              <a href={project.url} key={index} className="projectItem" target="_blank" rel="noopener noreferrer">
                <div
                  className="projectImage"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <span>Project {index + 1}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
