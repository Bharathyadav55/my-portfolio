import React from 'react';
import './About.css'; // Make sure this file exists

const About = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="about-title">About Me</h2>
            <p className="about-intro">
                Hi! I'm Bharath Yadav, a Frontend Developer Completed B.Tech in Information Technology. 
                I have hands-on experience in web development, Android app development, and big data analytics.
                My passion lies in creating seamless, user-friendly applications.
            </p>
            <div className="skills-container">
                <h3 className="skill-head">My Skills</h3>
                <span className="skill">HTML5</span>
                <span className="skill">CSS</span>
                <span className="skill">JavaScript</span>
                <span className="skill">Python</span>
                <span className="skill">ReactJS</span>
                <span className="skill">NextJS</span>
                <span className="skill">SQL</span>
                <span className="skill">git</span>
                <span className="skill">Postman</span>
            </div>    
        </section>
    );
};

export default About;
