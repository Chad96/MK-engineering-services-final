import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import HeroBg from '../assets/hero.jpg';  // Your image

function Home() {
  return (
    <section 
      id="home" 
      className="home-section d-flex align-items-center justify-content-center"
      style={{ 
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: 'cover',          // Covers the section
        backgroundPosition: 'center',     // Centers the image
        backgroundRepeat: 'no-repeat',    // Prevents tiling
        minHeight: '100vh',              // Full viewport height
        margin: 0,                       // No margins
        padding: 0                       // No padding
      }}
    >
      <Container fluid className="p-0">
        <Row className="text-center w-100 m-0">
          <Col>
          <h1 
              className="display-4"
              style={{
                color: 'white',  // White text for contrast
                fontSize: '5rem'  // Larger than default display-4 (~3rem)
              }}
            >
              <strong>MK Engineering Services SA</strong>
            </h1>
            <p 
              className="lead"
              style={{
                color: 'white',  // Dark Turquoise
                fontSize: '2rem'  // Larger than default lead (~1.25rem)
              }}
            >
              <strong>Engineering. Supply. Management</strong>
            </p>
            <p 
              className="mb-4"
              style={{
                color: 'white',  // Pale Green
                fontSize: '1.75rem' // Larger than default (~1rem)
              }}
            >
              Empowering businesses with innovative engineering solutions.
            </p>
            <Button 
              variant="primary" 
              as={Link} 
              to="contact" 
              smooth={true} 
              duration={500}
              style={{
                backgroundColor: '#800000',  // Maroon
                borderColor: '#800000',      // Matching border
                color: '#ffffff',            // White text for contrast
              }}
            >
              Get in Touch
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;