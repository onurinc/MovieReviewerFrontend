import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavMenu() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">MovieReviewer</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="login">Login</Nav.Link>
          <Nav.Link href="register">Register</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
