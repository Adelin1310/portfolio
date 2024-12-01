import React from 'react';
import './styles/about.css';
import photo from '../assets/about-me-picture.png'

const About = () => {


  return (
    <section className="about-section">
      <div className="about-left">
        <img
          src={photo} // Replace with your photo URL
          alt="Your Name"
          className="about-photo"
        />
      </div>
      <div className="about-right">
        <h2>FULL-STACK DEVELOPER</h2>
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
          I am a Full-Stack Developer with over 5 years of experience building scalable web applications, RESTful APIs, and microservices. Proficient in JavaScript, React, Node.js, MongoDB, MySQL, C#, and .NET Core, I excel in creating clean, efficient, and maintainable code.
            <br />
          With a strong foundation in authentication/authorization, Agile methodologies, Git, and CI/CD pipelines, I bring problem-solving skills and a focus on delivering robust, user-centric solutions. Let's connect to build something great together!
        </p>
      </div>
    </section>
  );
};

export default About;