import React from 'react';
import "./Bar.css";
import {
    Nav,
    Navbar,
    Container,
    NavDropdown,
    Form,
    Button,
    // Carousel,
    // // Figure,
    // // Card,
    // Row,
    // Col,
  } from "react-bootstrap";
function Bar() {
  return (
    <div>
    <Navbar>
    <Container fluid>
      <Navbar.Brand href="#">HOME</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#action1">About Us</Nav.Link>
          <Nav.Link href="#action2">Projects</Nav.Link>
          <NavDropdown title="More" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Goa Decor</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Contact Us</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</div>
  )
}

export default Bar