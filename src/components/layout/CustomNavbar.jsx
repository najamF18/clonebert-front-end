import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="p-0 top-navbar pe-5">
      <Container fluid>
        <Navbar.Brand href="/#">Clic Data Convertor</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent" className="pe-3">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link href="/#" className="nav-link active">
              Home
            </Nav.Link>
            <NavDropdown title="Hello World" id="navbarDropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
