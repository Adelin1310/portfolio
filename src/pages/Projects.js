import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './styles/projects.css';
import { data } from '../data';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const Projects = () => {
  const { landingpages, webapps, apis } = data.projects;
  const icons = data.languagesIcons;
  const [selectedCategory, setSelectedCategory] = useState('landingpages');

  const categories = [
    { name: 'Landing Pages', count: landingpages.no, key: 'landingpages' },
    { name: 'Web Apps', count: webapps.no, key: 'webapps' },
    { name: 'APIs', count: apis.no, key: 'apis' },
  ];

  const totalProjects = categories.reduce((total, category) => total + category.count, 0);

  const projects = {
    landingpages: landingpages.data,
    webapps: webapps.data,
    apis: apis.data,
  };

  const pieData = {
    labels: categories.map(category => category.name),
    datasets: [
      {
        data: categories.map(category => category.count),
        backgroundColor: [
          getComputedStyle(document.documentElement).getPropertyValue('--landing-page-color').trim(),
          getComputedStyle(document.documentElement).getPropertyValue('--web-app-color').trim(),
          getComputedStyle(document.documentElement).getPropertyValue('--api-color').trim()
        ],
        hoverBackgroundColor: [
          getComputedStyle(document.documentElement).getPropertyValue('--landing-page-color').trim(),
          getComputedStyle(document.documentElement).getPropertyValue('--web-app-color').trim(),
          getComputedStyle(document.documentElement).getPropertyValue('--api-color').trim()
        ],
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        setSelectedCategory(categories[index].key);
      }
    },
  };

  const categoryColors = {
    landingpages: getComputedStyle(document.documentElement).getPropertyValue('--landing-page-color').trim(),
    webapps: getComputedStyle(document.documentElement).getPropertyValue('--web-app-color').trim(),
    apis: getComputedStyle(document.documentElement).getPropertyValue('--api-color').trim(),
  };

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="categories-container">
        <div className="total-projects">
          <h3>Total</h3>
          <p>{totalProjects}</p>
        </div>
        <div className="pie-chart-container">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
      <div className="projects-container">
        <AnimatePresence>
          {projects[selectedCategory].map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              style={{ backgroundColor: categoryColors[selectedCategory] }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="project-image">
                <img src={project.images[0].src} alt={project.images[0].alt} />
              </div>
              <div className="project-content">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  View Project
                </a>
                <div className="project-technologies">
                  <ul>
                    {project.technologies.map((tech, index) => (
                      <li key={index} style={{color: categoryColors[selectedCategory]}}>
                        <i className={icons[tech]}></i> {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;