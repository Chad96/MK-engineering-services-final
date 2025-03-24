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
            <div className="mt-4 text-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d847632.0994285573!2d17.996640348826475!3d-33.91378097274572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town!5e0!3m2!1sen!2sza!4v1742819828454!5m2!1sen!2sza"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
