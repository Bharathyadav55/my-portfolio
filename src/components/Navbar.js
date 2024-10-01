import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css'; // Add the CSS for styling and animations
import { profile } from '../assets/Index';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar-light bg-white"> {/* Changed to navbar-light for white bg */}
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <img src={profile} alt="profile" className="rounded-image m-2" />
        Bharath Yadav
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
