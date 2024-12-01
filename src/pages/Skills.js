import React from 'react';
import './styles/skills.css';
import { data } from '../data';
import 'devicon/devicon.min.css';

const Skills = () => {
  const skills = {
    frontEnd: [
      'JavaScript',
      'React',
      'Sass',
      'Bootstrap',
      'Material-UI',
      'Redux'
    ],
    backEnd: [
      'Node.js',
      'Express',
      'C#',
      '.NET Core',
      'RESTful APIs',
      'Microservices',
      'MongoDB',
      'MySQL',
      'SQL Server',
      'OAuth',
    ],
  };

  const icons = data.languagesIcons;

  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills-section-container">
        <div className="skills-section">
          <h2>Front-End</h2>
          <div className="circle">
            {skills.frontEnd.map((skill, index) => (
              <div key={index} className="skill" style={{ transform: `rotate(${index * (360 / skills.frontEnd.length)}deg) translate(150px) rotate(-${index * (360 / skills.frontEnd.length)}deg)` }}>
                <i className={icons[skill]}></i>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-section">
          <h2>Back-End</h2>
          <div className="circle">
            {skills.backEnd.map((skill, index) => (
              <div key={index} className="skill" style={{ transform: `rotate(${index * (360 / skills.backEnd.length)}deg) translate(150px) rotate(-${index * (360 / skills.backEnd.length)}deg)` }}>
                <i className={icons[skill]}></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;