import React from "react";
import {
  Card,
  Container,
  Nav,
  Navbar,
  Row,
  Col,
} from "react-bootstrap";
<<<<<<< HEAD

import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { GET_FILMS } from "constants/urls";
=======
import { Link } from "react-router-dom";
>>>>>>> a9bf2f07275ddd66d14d139ccfa5f403036c3d2f
import cari from '../images/cari.png';
import motor from '../images/motor.png'
import list from '../images/list.png'
import calendar from '../images/calendar.png'
import logo from '../images/horizontal-primary.png';

const Services = () => {
<<<<<<< HEAD
  const history = useHistory();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [film, setFilm] = React.useState();

  React.useEffect(() => {
    axios
      .get(GET_FILMS)
      .then((res) => {
        setLoading(false);
        setFilm(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.warn(err);
      });
  }, []);

=======
>>>>>>> a9bf2f07275ddd66d14d139ccfa5f403036c3d2f
  return (
    <div className="benjol-bg-sm">
      <Navbar fixed="top" bg="white" variant="light" expand="md" >
        <Container>
          <Link to="/">
            <Navbar.Brand src={logo} className="benjol-brand">
              <img
                alt=""
                src={logo}
                width='180'
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto benjol-brand">
              <Nav.Link href="/services" className="nav-link-custom" active>Services</Nav.Link>
              <Nav.Link href="/aboutus" className="nav-link-custom">About Us</Nav.Link>
              <Nav.Link href="/bengkel" className="nav-link-custom">Our Partners</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container style={{paddingLeft: 100}}>
        <Row >
          <Col md="2">
            <Card className="cari-bengkel" style={{top: "80%", backgroundColor:'transparent', border: 'none'}}>
              <Card.Img src={cari} />
              <Card.Body>
                <Card.Text style={{textAlign:"center" ,top: "10%", fontSize: 14}}>
                  Cari Bengkel di Sekitar Anda
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="1"></Col>
          <Col md="2">
            <Card className="pickup" style={{top: "80%", backgroundColor:'transparent', border: 'none'}}>
              <Card.Img src={motor} />
              <Card.Body>
                <Card.Text style={{textAlign:"center" ,top: "10%", fontSize: 14}}>
                  Antar Jemput Motorr
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="1"></Col>
          <Col md="2">
            <Card className="check-progress" style={{top: "80%", backgroundColor:'transparent', border: 'none'}}>
              <Card.Img src={list} />
              <Card.Body>
                <Card.Text style={{textAlign:"center" ,top: "10%", fontSize: 14}}>
                  Check Progress Service
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="1"></Col>
          <Col md="2" >
            <Card className="booking" style={{top: "80%", backgroundColor:'transparent', border: 'none'}}>
              <Card.Img src={calendar} />
              <Card.Body>
                <Card.Text style={{textAlign:"center" ,top: "10%", fontSize: 14}}>
                  Booking Antrian Bengkel
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>      
      </Container>
    </div>
  );
};

export default Services;
