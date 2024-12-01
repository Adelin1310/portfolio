import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import "./styles/projects.css";
import { data } from "../data";

// Register the necessary components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const Projects = () => {
  const { landingpages, webapps, apis } = data.projects;
  const icons = data.languagesIcons;
  const [selectedCategory, setSelectedCategory] = useState("landingpages");

  const categories = [
    { name: "Landing Pages", count: landingpages.no, key: "landingpages" },
    { name: "Web Apps", count: webapps.no, key: "webapps" },
    { name: "APIs", count: apis.no, key: "apis" },
  ];

  const totalProjects = categories.reduce(
    (total, category) => total + category.count,
    0
  );

  const projects = {
    landingpages: landingpages.data,
    webapps: webapps.data,
    apis: apis.data,
  };

  const pieData = {
    labels: categories.map((category) => category.name),
    datasets: [
      {
        data: categories.map((category) => category.count),
        backgroundColor: [
          getComputedStyle(document.documentElement)
            .getPropertyValue("--landing-page-color")
            .trim(),
          getComputedStyle(document.documentElement)
            .getPropertyValue("--web-app-color")
            .trim(),
          getComputedStyle(document.documentElement)
            .getPropertyValue("--api-color")
            .trim(),
        ],
        hoverBackgroundColor: [
          getComputedStyle(document.documentElement)
            .getPropertyValue("--landing-page-color")
            .trim(),
          getComputedStyle(document.documentElement)
            .getPropertyValue("--web-app-color")
            .trim(),
          getComputedStyle(document.documentElement)
            .getPropertyValue("--api-color")
            .trim(),
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
    landingpages: getComputedStyle(document.documentElement)
      .getPropertyValue("--landing-page-color")
      .trim(),
    webapps: getComputedStyle(document.documentElement)
      .getPropertyValue("--web-app-color")
      .trim(),
    apis: getComputedStyle(document.documentElement)
      .getPropertyValue("--api-color")
      .trim(),
  };

  const technologyFrequency = {};
  Object.values(projects).forEach((projectList) => {
    projectList.forEach((project) => {
      project.technologies.forEach((tech) => {
        if (technologyFrequency[tech]) {
          technologyFrequency[tech]++;
        } else {
          technologyFrequency[tech] = 1;
        }
      });
    });
  });

  const technologyFrequencyData = {
    labels: Object.keys(technologyFrequency),
    datasets: [
      {
        // Hide the label
        label: "",

        // Order the data by frequency
        data: Object.keys(technologyFrequency)
          .sort((a, b) => technologyFrequency[b] - technologyFrequency[a])
          .map((tech) => technologyFrequency[tech]),

        // Use a different random color for each technology
        backgroundColor: Object.keys(technologyFrequency).map(
          () =>
            `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
              Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)}, 0.5)`
        ),
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <section className="projects-section">
      <h2>
        These are the <span className="keyword">Projects</span> I built
      </h2>
      <div className="categories-container">
        <div className="card description-container">
          <p>
            {/* Medium length description of my workflow and how much effort i put into each single project. IMPORTANT! DON'T MENTION ANY TECHNOLOGIES AS THEY WILL ANYWAYS BE SHOWN IN THE STATS*/}
            I have dedicated myself to working on a total of{" "}
            <span className="keyword">{totalProjects}</span> projects, each one
            a testament to my commitment to{" "}
            <span className="keyword">excellence</span> and{" "}
            <span className="keyword">innovation</span>. From the initial
            concept to the final stages of development, I meticulously craft
            each project with a keen eye for{" "}
            <span className="keyword">detail</span> and a passion for creating{" "}
            <span className="keyword">high-quality solutions</span>. My workflow
            blends <span className="keyword">creativity</span> and{" "}
            <span className="keyword">technical expertise</span>, ensuring that
            every project meets and exceeds expectations. I take pride in
            adapting to new challenges and continuously improving my skills,
            which is reflected in the diverse range of projects I have
            successfully completed. Each project is a unique journey, and I
            invest significant effort into understanding specific needs and
            goals, delivering <span className="keyword">impactful</span> and{" "}
            <span className="keyword">enduring results</span>.
          </p>
          <span style={{ fontSize: "0.8rem", color: "var(--accent-color)" }}>
            {/* Small text below the description */}
            <FontAwesomeIcon icon={["fas", "info-circle"]} />{" "}
            <span style={{ fontWeight: "bold" }}>Tip:</span> Click on the pie
            chart to filter projects by category.
          </span>
        </div>
        <div className="pie-chart-container">
          <Pie data={pieData} options={pieOptions} />
        </div>
        <div className="card kpi-card">
          <div className="bar-chart-container">
            <Bar data={technologyFrequencyData} options={barOptions} />
          </div>
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
                <div className="project-links">
                  {/* Github and Live */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
                <div className="project-technologies">
                  <ul>
                    {project.technologies.map((tech, index) => (
                      <li
                        key={index}
                        className="tech"
                        style={{ color: categoryColors[selectedCategory] }}
                      >
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
