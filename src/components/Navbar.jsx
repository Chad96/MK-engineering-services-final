import React from "react";
import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Navbar.css"; // Import the CSS

function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" fixed="top">
      <BootstrapNavbar.Brand as={Link} to="home" smooth={true} duration={500}>
        MK Engineering
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="home" smooth={true} duration={500}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="about" smooth={true} duration={500}>
            About
          </Nav.Link>
          <Nav.Link as={Link} to="services" smooth={true} duration={500}>
            Services
          </Nav.Link>
          <Nav.Link as={Link} to="why-us" smooth={true} duration={500}>
            Why Us
          </Nav.Link>
          <Nav.Link as={Link} to="contact" smooth={true} duration={500}>
            Contact
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default Navbar;