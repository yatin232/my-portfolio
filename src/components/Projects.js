import React from 'react';
import { FaGithub, FaExternalAltLink } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing projects and skills with interactive UI',
      technologies: ['React', 'CSS', 'JavaScript'],
      github: 'https://github.com',
      live: 'https://portfolio.com',
      image: '🌐',
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce application with payment integration and admin dashboard',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://ecommerce.com',
      image: '🛒',
    },
    {
      id: 3,
      title: 'Task Manager App',
      description: 'A collaborative task management tool with real-time updates and notifications',
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com',
      live: 'https://taskmanager.com',
      image: '✓',
    },
    {
      id: 4,
      title: 'Weather Application',
      description: 'Real-time weather app with location-based forecasting and beautiful animations',
      technologies: ['React', 'API', 'Axios'],
      github: 'https://github.com',
      live: 'https://weather.com',
      image: '⛅',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">{project.image}</div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> GitHub
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaExternalAltLink /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;