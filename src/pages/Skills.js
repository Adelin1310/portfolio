import React, { useEffect } from "react";
import "./styles/skills.css";
import { data } from "../data";
import "devicon/devicon.min.css";

const Skills = () => {
  const skills = {
    frontEnd: [
      "JavaScript",
      "React",
      "Sass",
      "Bootstrap",
      "Material-UI",
      "Redux",
    ],
    backEnd: [
      "Node.js",
      "Express",
      "C#",
      ".NET Core",
      "RESTful APIs",
      "Microservices",
      "MongoDB",
      "MySQL",
      "SQL Server",
      "OAuth",
    ],
  };

  const frontendSkills = skills.frontEnd.filter(
    (skill) => data.languagesIcons[skill] !== undefined
  );
  const backendSkills = skills.backEnd.filter(
    (skill) => data.languagesIcons[skill] !== undefined
  );

  const icons = data.languagesIcons;

  useEffect(() => {
    const updateCircleSize = () => {
      const circles = document.querySelectorAll(".circle");
      circles.forEach((circle) => {
        const radius = circle.offsetWidth / 2;
        circle.style.setProperty("--translate-distance", `${radius}px`);
      });
    };

    updateCircleSize();
    window.addEventListener("resize", updateCircleSize);

    return () => {
      window.removeEventListener("resize", updateCircleSize);
    };
  }, []);

  return (
    <div className="skills">
      <h1>
        My <span style={{ color: "#61dafb" }}>Stack</span>
      </h1>
      <div className="skills-section-container">
        <div className="skills-section">
          <h2>Front-End</h2>
          <div className="circle frontend">
            {frontendSkills.map((skill, index) => (
              <div
                key={index}
                className="skill"
                style={{
                  transform: `rotate(${
                    index * (360 / frontendSkills.length)
                  }deg) translate(var(--translate-distance)) rotate(-${
                    index * (360 / frontendSkills.length)
                  }deg)`,
                }}
              >
                <i className={icons[skill]}></i>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-section">
          <h2>Back-End</h2>
          <div className="circle backend">
            {backendSkills.map((skill, index) => (
              <div
                key={index}
                className="skill"
                style={{
                  transform: `rotate(${
                    index * (360 / backendSkills.length)
                  }deg) translate(var(--translate-distance)) rotate(-${
                    index * (360 / backendSkills.length)
                  }deg)`,
                }}
              >
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
