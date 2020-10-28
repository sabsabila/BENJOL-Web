import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Button,

} from "react-bootstrap";
import { Link } from "react-router-dom";
import image from '../images/bawah.png';
const Bengkel = () => {


  return (
    <div>
      <Navbar fixed="top" bg="white" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand color="white">BENJOL</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Button variant="primary">
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar style={{ paddingLeft: 0, paddingRight: 0, paddingBottom:0}} fixed="bottom">
        
          <img className="bottom_image img-fluid" src= {image} alt=""/> 
          
      </Navbar>
    </div>
  );
}

export default Bengkel;
