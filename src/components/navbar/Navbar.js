import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../Assets/logo.jpg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
      <Navbar
          expanded={expand}
          fixed="top"
          expand="md"
          className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <img
                src={logo}
                className="img-fluid logo"
                alt="brand"
                style={{ width: "48px", height: "40px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() => {
                updateExpanded(expand ? false : "expanded");
              }}
          >
            <div className="toggleButton">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                  Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                    as={Link}
                    to="/about"
                    onClick={() => updateExpanded(false)}
                >
                  About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                    as={Link}
                    to="/project"
                    onClick={() => updateExpanded(false)}
                >
                  Projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                    href="https://www.freepik.com/free-vector/coming-soon-text-grunge-background_30515944.htm#query=coming%20soon%20png&position=0&from_view=keyword&track=ais_user&uuid=cfd4a78e-c2a6-4ca8-b432-2d11efa01a3a"
                    target="_blank"
                    rel="noreferrer"
                >
                  Blogs
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;
