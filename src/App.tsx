import { useState, useEffect } from "react";
import './App.css'
import icon from "./assets/icon.jpg";
import oldIcon from "./assets/oldIcon.png";
import bsuFlowers from "./assets/bsuFlowers.jpg";
import famPic from "./assets/famPic.png";
import project1Image from "./assets/famPic.png";
import retroGameBG from "./assets/animatedRetroGameBG.gif";


const images = [icon, oldIcon, bsuFlowers, famPic];

const projectLinks = [
  { url: "https://github.com/yourusername/project1", image: project1Image }
  // { url: "https://github.com/yourusername/project2", image: project2Image },
  // { url: "https://github.com/yourusername/project3", image: project3Image }
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

        <div className="aboutContainer">
          <div className="introP"> 
            <p>
              Hello, my name is Damon Stangel. I'm currently an Application Developer for <a href='https://www.prowestgis.com/' target="_blank"> Pro-West & Associates Inc</a>. 
              I consider myself a skilled front-end developer and application developer, who's passionate about building interactive web experiences and applications.
            </p>
            <div className="resumeButtonDiv">
            <p>Download my resume!</p>
            <a href="/resume.pdf" download="Damon Stangel Resume.pdf">
            <button className="buttonColorChange">Download PDF</button></a>
            </div>
            </div>

          <p className="skillsSection">
              
              <div className="listSkills">
  <div>
    <h3>Front End</h3>
    <ul>
      <li>TypeScript</li>
      <li>Angular</li>
      <li>React</li>
      <li>Javascript</li>
      <li>Vite</li>
      <li>HTML & CSS</li>
    </ul>
  </div>
  <div>
    <h3>Back End</h3>
    <ul>
      <li>Python</li>
      <li>Node.js</li>
      <li>.NET</li>
      <li>C#</li>
      <li>mySQL</li>
    </ul>
  </div>
  <div>
  <h3>DevOps & Tools</h3>
  <ul>
    <li>OpenSearch API</li>
    <li>Lighthouse (DevTools)</li>
    <li>Docker</li>
    <li>Git/GitHub</li>
    <li>AWS (Some exp.)</li>
    <li>CI/CD (GitHub Actions, Jenkins, etc.)</li>
  </ul>
</div>
</div>
            </p>
        </div>
      </section>
  <section
  id="projects"
  className="section"
  style={{
    backgroundImage: `url(${retroGameBG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>

    {/* <section id="projects" className="section" style={{ backgroundImage: `url(${retroGameBG})`,backgroundSize: 'cover', backgroundPosition: 'center' }}> */}
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

      <section id="about" className="section">
      <h1 className='aboutHeader'>Contact Info</h1>
          <div className="slideshow-wrapper">
            <img
              src={images[currentIndex]}
              className="active-slide"
              alt="Slideshow"
            />

          </div>

    </section>
    </>
  );
}

export default App;
