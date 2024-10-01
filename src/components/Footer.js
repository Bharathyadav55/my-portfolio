import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing icons
import './Footer.css'; // Make sure to create a Footer.css file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} Bharath Yadav. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/bharath-yadav-66712324b/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Bharathyadav55" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://x.com/Bharath_yadav5" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/bharath_yadav55/?hl=en" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
