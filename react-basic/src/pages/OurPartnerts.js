import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { GET_FILMS } from "constants/urls";
import image from '../images/bawah.png';
import '../index.css'

const Services = () => {
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
    return () => {};
  }, []);

  return (
    <div className="benjol-bg">
      <Navbar fixed="top" bg="white" variant="light" expand="md" >
        <Container>
          <Link to="/dashboard">
            <Navbar.Brand className="benjol-brand">BENJOL | <i> Bengkel Jadi Online</i></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto benjol-brand">
              <Nav.Link href="/services" className="nav-link-custom" >Services</Nav.Link>
              <Nav.Link href="/aboutus" className="nav-link-custom">About Us</Nav.Link>
              <Nav.Link href="/ourpartners" className="nav-link-custom" active>Our Partners</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container style={{ paddingTop: 100 }} className="d-flex align-items-center">
      <Row style={{width: '100%'}}>
        <Col lg={6}></Col>
        <Col  lg={6} className="d-flex flex-column align-items-center">
          <Form style={{width: '100%'}} className="d-flex flex-column align-items-center">
              <Form.Label><h2 style={{ color: '#636363' }}>BE OUR PARTNER</h2></Form.Label>
              <Form.Group style={{ paddingRight: 55 }}>
                <Form.Label><p style={{ color: '#636363', paddingLeft: 10, fontSize: 14, marginBottom:'-10%' }}>Bengkel Name</p></Form.Label>
                <Form.Control type="text" placeholder="Bengkel Name" className="mb-1 mr-sm-1 rounded-pill" style={{ width: '125%' }} />
              </Form.Group>

              <Form.Group style={{ paddingRight: 55 }}>
                <Form.Label><p style={{ color: '#636363', paddingLeft: 10, fontSize: 14, marginBottom:'-10%' }}>Address</p></Form.Label>
                <Form.Control type="text" placeholder="Address" className="mb-1 mr-sm-1 rounded-pill" style={{ width: '125%' }} />
              </Form.Group>

              <Form.Group style={{ paddingRight: 55 }}>
                <Form.Label><p style={{ color: '#636363', paddingLeft: 10, fontSize: 14, marginBottom:'-10%' }}>Email</p></Form.Label>
                <Form.Control type="text" placeholder="Email" className="mb-1 mr-sm-1 rounded-pill" style={{ width: '125%' }} />
              </Form.Group>

              <Form.Group style={{ paddingRight: 55 }}>
                <Form.Label><p style={{ color: '#636363', paddingLeft: 10, fontSize: 14, marginBottom:'-10%' }}>Username</p></Form.Label>
                <Form.Control type="text" placeholder="Username" className="mb-1 mr-sm-1 rounded-pill" style={{ width: '125%' }} />
              </Form.Group>

              <Form.Group style={{ paddingRight: 55 }}>
                <Form.Label><p style={{ color: '#636363', paddingLeft: 10, fontSize: 14, marginBottom:'-10%' }}>Password</p></Form.Label>
                <Form.Control type="password" placeholder="Password" className="mb-1 mr-sm-1 rounded-pill" style={{ width: '125%' }} />
              </Form.Group>

              <Button className="button-custom fa fa-search rounded-pill" type="submit">Sign Up</Button>

          </Form>
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default Services;
