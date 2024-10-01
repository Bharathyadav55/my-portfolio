import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import backgroundImage from '../assets/image.png'; // Adjust path if necessary

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false); // Use this state

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace these with your EmailJS service, template, and user IDs
        const serviceID = 'service_gm5yuhu';
        const templateID = 'template_hjhg79r';
        const userID = 'ow53motFHkFZLeECH';

        emailjs.send(serviceID, templateID, formData, userID)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setIsSubmitted(true); // Set this to true upon success
                alert('Message sent successfully!');
            }, (error) => {
                console.error('Error sending email:', error.text);
                alert('Failed to send message.');
            });

        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section className="contact-section" id="contact" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="contact-overlay">
                <h2>CONTACT ME</h2>
                {isSubmitted ? (
                    <p className="thank-you-message">Thank you for reaching out! I'll get back to you soon.</p>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;
