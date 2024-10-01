import React from 'react';
import './Home.css';
import backgroundImage from '../assets/image.png'; // Import the image directly

const Home = () => {
    return (
        <section id="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1>Hey, My Name Is Bharath Yadav</h1>
            <p>A passionate Frontend Developer specializing in building responsive and user-friendly web applications. 
                With expertise in HTML, CSS, JavaScript, React.js, and a keen eye for detail, 
                I craft seamless digital experiences. Let's bring your ideas to life through clean code and creative solutions!</p>
            <a href="#projects">
              <button className="P-5">PROJECTS</button>
            </a>
        </section>
    );
};

export default Home;
