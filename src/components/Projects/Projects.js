import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="My Web Agency Portfolio"
              description="React and Tailwind CSS using WebFlow Template this project showcases modern, fully responsive websites including business sites, landing pages, and e-commerce platforms. It features Whatsapp Chat Integration using API routing for Connecting Clients reusable components, and optimized performance. Project content is managed allowing seamless integration and easy scalability. Includes contact forms, animation effects, and dark mode support for a modern user experience."
              ghLink="https://github.com/yatin232/ramzo"
              demoLink="https://ramzo.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="GeoFind: Lost & Found Web App with AI Chatbot"
              description="A full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js) and styled with Tailwind CSS, designed to help users report and discover lost or found items in their area. It features real-time geolocation mapping with Leaflet.js and OpenStreetMap,Includes user authentication and a smart AI-powered chatbot integrated via the Gemini API to assist users with common queries. Fully responsive design optimized for both desktop and mobile users."
              ghLink="https://github.com/yatin232/GeoFind"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Metro Destination Alarm & Tracker"
              description="A mobile-responsive web app built with React.js, Node.js, and MongoDB, designed to assist daily metro commuters. The app allows users to set a destination station, and it tracks their location in real-time, triggering an alarm when the destination is near. Integrated with Leaflet.js for accurate map rendering and Geolocation API for live tracking. The UI is styled with Tailwind CSS and optimized for low battery and offline-friendly behavior. Ideal for travelers who often miss their stops due to distractions or sleep."
              ghLink="https://github.com/yatin232/MDAT"
              demoLink="https://mdatbyysr.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
