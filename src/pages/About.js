import React from "react";
import "./styles/about.css";
import photo from "../assets/about-me-picture.png";

const About = () => {
  return (
    <section className="about-section">
      <h1 className="section-title">
        About <span className="keyword">Me</span>
      </h1>
      <div className="about-left">
        <img
          src={photo} // Replace with your photo URL
          alt="Your Name"
          className="about-photo"
        />
      </div>
      <div className="about-right">
        <h2>
          Hi, I'm <span className="keyword">Andrica Adelin</span>
        </h2>
        <p className="about-description">
          {/*
            - 5 Years of experience in Full-Stack Development
            - Strong knowledge of JavaScript, React, NodeJS, Express, MongoDB, MySQL, SQL Server, C#, .NET Core, and more
            - Experience in developing web applications, RESTful APIs, and microservices
            - Experience in working with Agile methodologies
            - Strong knowledge of Git and CI/CD pipelines
            - Strong Authentication and Authorization knowledge
            = Proficient in writing clean, maintainable, and efficient code
            - Strong problem-solving skills
            - Strong communication skills
            - Strong knowledge of software design patterns
            - Oriented towards building scalable and maintainable solutions

           */}
          I am a <span className="keyword">Full-Stack Developer</span> with over{" "}
          <span className="keyword">5 years of experience</span> building
          scalable <span className="keyword">web applications</span>,{" "}
          <span className="keyword">RESTful APIs</span>, and{" "}
          <span className="keyword">microservices</span>. Proficient in{" "}
          <span className="keyword">JavaScript</span>,{" "}
          <span className="keyword">React</span>,{" "}
          <span className="keyword">Node.js</span>,{" "}
          <span className="keyword">MongoDB</span>,{" "}
          <span className="keyword">MySQL</span>,{" "}
          <span className="keyword">C#</span>, and{" "}
          <span className="keyword">.NET Core</span>, I excel in creating clean,
          efficient, and maintainable code.
          <br />
          With a strong foundation in{" "}
          <span className="keyword">authentication/authorization</span>,{" "}
          <span className="keyword">Agile methodologies</span>,{" "}
          <span className="keyword">Git</span>, and{" "}
          <span className="keyword">CI/CD pipelines</span>, I bring{" "}
          <span className="keyword">problem-solving skills</span> and a focus on
          delivering robust, user-centric solutions. Let's connect to build
          something great together!
        </p>
      </div>
    </section>
  );
};

export default About;
