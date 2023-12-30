import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Person, HouseDoor, PencilSquare } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={3} md={2} className="p-0 sidebar primary-bg text-start">
          <Navbar collapseOnSelect expand="sm" variant="dark" className="flex-column justify-content-start align-items-start">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="flex-column">
                <Nav.Link href="#" className="text-truncate">
                <HouseDoor size={20} color="white" />
                  <strong className='ms-2'>Dashboard</strong>
                </Nav.Link>
                <Nav.Link href="#" className="text-truncate">
                <PencilSquare size={20} color="white" />
                <strong className='ms-2'>Create Post</strong>
                </Nav.Link>
                <Nav.Link href="#" className="text-truncate">
                  Sechdule Post
                </Nav.Link>
                <Nav.Link href="#" className="text-truncate">
                  Give Feedbaack
                </Nav.Link>
                <Nav.Link href="#" className="text-truncate">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        <Col xs={12} sm={9} md={10} className="p-4 content">
          <h1>Hello Welcome</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
