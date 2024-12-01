import React from 'react';
import './styles/contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
            <h2>Contact</h2>
            <p>Email: adelinandrica@gmail.com</p>
            {/* Add your social media links here, preferrable using icons*/}
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/adelin-andrica-7b0b3b1b1/" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com/adelin-andrica" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Contact;