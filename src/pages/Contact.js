import React from "react";
import "./styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section className="contact-section">
      <ul>
        <li>
          <a href="mailto:adelinandrica@gmail.com">
            <FontAwesomeIcon icon="envelope" /> Email
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/adelin-andrica-b8152b166/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/Adelin1310"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
