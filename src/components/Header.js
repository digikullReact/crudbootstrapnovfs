import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return <>
  <Navbar bg="dark" variant="dark">
    <Container
    >
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Link to="/home">Home</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
    </Nav>
    </Container>
  </Navbar>


 
</>;
};

export default Header;
