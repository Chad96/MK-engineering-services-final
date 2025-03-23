import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to an API)
    console.log(formData);
    alert('Form submitted! Check console for data.');
  };

  return (
    <section id="contact" className="py-5 bg-light d-flex align-items-center justify-content-center">
      <Container>
        <h2 className="text-center mb-4">Reach Out</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <p className="text-center">
              For inquiries or partnership opportunities, use the form below or email us at{' '}
              <a href="mailto:info@mkengineeringsa.com" className="text-primary">
                info@mkengineeringsa.com
              </a>. We respond within 24 hours.
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;