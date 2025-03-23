import React from 'react';
import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" fixed="top">
      <BootstrapNavbar.Brand href="#home">MK Engineering</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link 
            as={Link} 
            to="home" 
            smooth={true} 
            duration={500}
            style={{ paddingLeft: '15px', paddingRight: '15px' }}
          >
            Home
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="about" 
            smooth={true} 
            duration={500}
            style={{ paddingLeft: '15px', paddingRight: '15px' }}
          >
            About
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="services" 
            smooth={true} 
            duration={500}
            style={{ paddingLeft: '15px', paddingRight: '15px' }}
          >
            Services
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="why-us" 
            smooth={true} 
            duration={500}
            style={{ paddingLeft: '15px', paddingRight: '15px' }}
          >
            Why Us
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="contact" 
            smooth={true} 
            duration={500}
            style={{ paddingLeft: '15px', paddingRight: '15px' }}
          >
            Contact
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default Navbar;