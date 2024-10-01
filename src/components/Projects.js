import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio 2024",
      description: "Conceptualized and developed a personalized portfolio website utilizing HTML and CSS to showcase my skills, projects, and experiences. Leveraged HTML and CSS styling techniques to create an aesthetically pleasing and user-friendly interface.",
      image: "path/to/portfolio-image.jpg" // Replace with your actual image path
    },
    {
      title: "BIG DATA ANALYTIC ON CROP YIELD PREDICTION",
      description: "This project develops a scalable system that predicts crop yields using weather forecasting and big data analytics. It utilizes visualizations, graphs, K-Means clustering, and gradient boosting algorithms to determine average agricultural yields per area. The approach incorporates MapReduce for computational efficiency, enabling accurate crop recommendations based on weather conditions.",
      image: "path/to/crop-yield-image.jpg" // Replace with your actual image path
    },
    {
      title: "Cricket Alert using Python 2022",
      description: "In this project, live cricket data is fetched from the network and it will be shown in our project.",
      image: "path/to/cricket-alert-image.jpg" // Replace with your actual image path
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="projects-section" id='projects'>
      <h2>Projects</h2>
      <div className="project-card-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-card" onMouseEnter={() => handleHover(index)} onMouseLeave={handleLeave}>
            <div className={`project-card-content ${hoveredIndex === index ? 'hovered' : ''}`}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button>CASE STUDY</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
