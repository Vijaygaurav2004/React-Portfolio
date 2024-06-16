import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import scraper from "../../Assets/Projects/scraper.jpeg";
import Portfolio from "../../Assets/Projects/portfolio.webp";
import imageeditor from "../../Assets/Projects/imageeditor.webp";
import bookmyshow from "../../Assets/Projects/bookmyshow.webp";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={scraper}
              title="Web Scraper"
              description="This is a fully functional python based web scraper to compare prices of products on different e-commerce websites. It uses BeautifulSoup and requests library to scrape data from the website."
              ghLink="https://github.com/"
              demoLink="#"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React . It is fully responsive website."
              ghLink="https://github.com/"
              demoLink="/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={imageeditor}
              title="Image Editor"
              description=" It is command line based image editor which can perform various operations on images like resizing, cropping, rotating, etc."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={bookmyshow}
              title="Book My Show Backend"
              description="this is a java spring boot project which is a backend of book my show website."
              ghLink="https://github.com/"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
