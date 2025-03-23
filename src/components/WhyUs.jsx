import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function WhyUs() {
  return (
    <section id="why-us" className="py-5 d-flex align-items-center justify-content-center">
      <Container>
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <Row>
          <Col md={3} className="mb-4">
            <h4>Tailored Solutions</h4>
            <p>We understand that every client has unique needs, and we design customized strategies to meet their specific challenges.</p>
          </Col>
          <Col md={3} className="mb-4">
            <h4>Expertise & Innovation</h4>
            <p>Our team brings cutting-edge knowledge and innovative thinking to engineering solutions.</p>
          </Col>
          <Col md={3} className="mb-4">
            <h4>Commitment to Quality</h4>
            <p>We prioritize excellence, reliability, and efficiency in every project we undertake.</p>
          </Col>
          <Col md={3} className="mb-4">
            <h4>Client-Centric Approach</h4>
            <p>We build long-term partnerships by ensuring transparency, responsiveness, and customer satisfaction.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhyUs;