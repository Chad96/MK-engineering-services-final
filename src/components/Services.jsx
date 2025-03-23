import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ServicesBg from '../assets/serv.jpg';       // Background image for section
import ConsultingImg from '../assets/consult.jpg';    // Image for Engineering Consulting
import SupplyImg from '../assets/supply.jpg';            // Image for Product Supply
import ManagementImg from '../assets/manage.jpg';    // Image for Project Management

function Services() {
  const services = [
    {
      title: 'Engineering Consulting',
      image: ConsultingImg,
      items: [
        'Technical advisory and feasibility studies',
        'System design and optimization',
        'Process improvement and troubleshooting'
      ]
    },
    {
      title: 'Product Supply',
      image: SupplyImg,
      items: [
        'Sourcing high-quality engineering components and materials',
        'Supply chain management and logistics solutions',
        'Vendor evaluation and procurement consulting'
      ]
    },
    {
      title: 'Project Management',
      image: ManagementImg,
      items: [
        'End-to-end project planning and execution',
        'Risk assessment and mitigation strategies',
        'Budgeting, scheduling, and quality control'
      ]
    }
  ];

  return (
    <section 
      id="services" 
      className="py-5 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${ServicesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        margin: 0,
        padding: 0
      }}
    >
      <Container>
        <h2 
          className="text-center"
          style={{ 
            marginTop: '-150px',    // Keeps it moved up
            marginBottom: '90px',   // Keeps increased space below
            color: 'black'        // Maroon color
          }} 
        >
          Our Services
        </h2>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100">
                <Card.Img 
                  variant="top" 
                  src={service.image} 
                  alt={service.title} 
                  style={{ height: '200px', objectFit: 'cover' }} 
                />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <ul>
                    {service.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;