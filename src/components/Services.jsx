import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ServicesBg from "../assets/serv.jpg";
import ConsultingImg from "../assets/consult.jpg";
import SupplyImg from "../assets/supply.jpg";
import ManagementImg from "../assets/manage.jpg";
import OptimizationImg from "../assets/opti.jpg"; // Add your new image here
import "./Services.css";

function Services() {
  const services = [
    {
      title: "Engineering Consulting",
      image: ConsultingImg,
      items: [
        "Technical advisory and feasibility studies",
        "System design and optimization",
        "Process improvement and troubleshooting",
      ],
    },
    {
      title: "Product Supply",
      image: SupplyImg,
      items: [
        "Sourcing high-quality engineering components and materials",
        "Supply chain management and logistics solutions",
        "Vendor evaluation and procurement consulting",
      ],
    },
    {
      title: "Project Management",
      image: ManagementImg,
      items: [
        "End-to-end project planning and execution",
        "Risk assessment and mitigation strategies",
        "Budgeting, scheduling, and quality control",
      ],
    },
  ];

  return (
    <section id="services" className="py-5">
      <Container>
        {/* Existing Services Section */}
        <h2 className="text-center">Our Services</h2>
        <p className="text-center">
          At MK Engineering Services SA, we offer a range of tailored engineering solutions, including:
        </p>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={service.image} alt={service.title} />
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

        {/* New Process Optimization Section */}
        <Row className="mt-5 align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="text-center text-md-start">Process Optimization</h2>
            <p>
              We collaborate with organizations to optimize operations, reduce costs, and enhance productivity. Our experts conduct in-depth analyses of existing processes, identify inefficiencies, and implement best practices that drive efficiency and improve overall profitability.
            </p>
          </Col>
          <Col md={6}>
            <img
              src={OptimizationImg}
              alt="Process Optimization"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;