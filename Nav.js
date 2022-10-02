import React from 'react'
import {Nav,Container,Navbar} from "react-bootstrap"
import {Link} from "react-router-dom";
import "./styles/nav.css"

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="success"  className="fs-4">
      <Container fluid className='navbar'>
        <Navbar.Brand className='fs-3' variant="light">PageLogo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto pagelink ml-3">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/application">Application</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className='pagelink'>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register" >Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation