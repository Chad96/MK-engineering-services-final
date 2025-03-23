import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutImage from '../assets/about.jpg';  // Replace with your image

function About() {
  return (
    <section id="about" className="py-5 d-flex align-items-center justify-content-center">
      <Container>
        <h2 className="text-center mb-4">About Us</h2>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <img 
              src={AboutImage} 
              alt="MK Engineering Team" 
              className="img-fluid rounded shadow" 
              style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }} 
            />
          </Col>
          <Col md={6}>
            <p>Founded in 2024, MK Engineering Services SA is a forward-thinking engineering firm dedicated to empowering businesses and partners to navigate the complexities of engineering.</p>
            <p>Our mission is to provide tailored engineering services that meet the unique needs of our clients, delivering innovative and effective solutions.</p>
            <p> As a startup, we are commited to delivering tailored engineering services, product supply, and project management solutions that meet the unique needs of each clients.</p>
            <h4>Mission</h4>
            <p>Our mission is to provide comprehensive engineering services tailored to the unique needs of our clients. We strive to be the trusted partner for businesses in the engineering sector, delivering innovative solutions that enhance efficiency, boost productivity, and drive long-term success.</p>
            <h4>Vision</h4>
            <p>To be a leading engineering firm, recognized for innovation, excellence, and reliability, providing cutting-edge solutions that drive sustainable growth and long-term success for our clients and partners worldwide.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;